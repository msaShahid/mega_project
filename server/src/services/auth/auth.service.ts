import User, { IUser } from '@models/auth/user.model';
import {generateOtp} from '@utils/generateOtp';
import { normalizeEmail } from '@utils/normalizeEmail';
import { sendOtpEmail } from '@utils/mailOtp';
import errorFactory from '@utils/errorFactory';

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}): Promise<IUser> => {
  const { name, email, password } = data;
  const normalizedEmail = normalizeEmail(email);

  const existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser && existingUser.isVerified) {
    throw errorFactory.userAlreadyRegistered();
  }

  const { otp, otpExpires } = generateOtp();

  if (existingUser) {
    // Update OTP for unverified user
    existingUser.otp = otp;
    existingUser.otpExpires = otpExpires;
    await existingUser.save();
    await sendOtpEmail(email, otp);
    return existingUser;
  }

  // Create new user
  const newUser = new User({
    name,
    email,
    normalizedEmail,
    password,
    otp,
    otpExpires,
    isVerified: false,
  });

  await newUser.save();
  await sendOtpEmail(email, otp);

  return newUser;
};

export const verifyOtp = async (data: {
  email: string;
  otp: string;
}): Promise<IUser> => {
  const { email, otp } = data;
  const normalizedEmail = normalizeEmail(email);

  const user = await User.findOne({ email: normalizedEmail });

  if (!user) throw errorFactory.userNotFound(); 
  if (user.isVerified) throw errorFactory.userAlreadyVerified();
  if (!user.otp || !user.otpExpires) throw errorFactory.noOtpFound();
  if (user.otp !== otp || user.otpExpires < new Date()) {
    throw errorFactory.invalidOrExpiredOtp(); 
  }

  user.isVerified = true;
  user.otp = undefined;
  user.otpExpires = undefined;
  await user.save();

  return user;
};

export const loginUser = async (data: { email: string; password: string }): Promise<IUser> => {
  const { email, password } = data;
  const normalizedEmail = normalizeEmail(email)

  const user = await User.findOne({ email: normalizedEmail });
  if (!user || !user.isVerified) {
    throw errorFactory.invalidCredentials(); 
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw errorFactory.wrongCredentials();
  }

  return user;
};

export const getAllUsers = async (onlyVerified = false): Promise<IUser[]> => {
  const filter = onlyVerified ? { isVerified: true } : {};
  return await User.find(filter).select('-password -otp -otpExpires');
};
