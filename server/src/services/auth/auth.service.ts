import User, { IUser } from '@models/auth/user.model';
import {generateOtp} from '@utils/generateOtp';
import { normalizeEmail } from '@utils/normalizeEmail';

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  verifyOtp?: string;
}): Promise<IUser> => {
  const { name, email, password, verifyOtp } = data;
  const normalizedEmail = normalizeEmail(email)

  let user = await User.findOne({ normalizedEmail });

  if (user) {
    if (user.isVerified) {
      throw new Error('User already registered and verified.');
    } else {
      // User exists but not verified, verify OTP
      if (!verifyOtp) {
        throw new Error('Please provide OTP for verification.');
      }
      if (user.otp !== verifyOtp || (user.otpExpires && user.otpExpires < new Date())) {
        throw new Error('Invalid or expired OTP.');
      }

      user.isVerified = true;
      user.otp = undefined;
      user.otpExpires = undefined;
      await user.save();

      return user;
    }
  }

  // New user registration with OTP
  const { otp, otpExpires } = generateOtp();

  user = new User({
    name,
    email,
    password,
    otp,
    otpExpires,
    isVerified: false,
  });

  await user.save();

  // TODO: Send OTP to email

  console.log(`Send OTP ${otp} to user email ${email}`);

  return user;
};

export const loginUser = async (data: { email: string; password: string }): Promise<IUser> => {
  const { email, password } = data;
  const normalizedEmail = normalizeEmail(email)

  const user = await User.findOne({ normalizedEmail });
  if (!user || !user.isVerified) {
    throw new Error('Invalid credentials or email not verified.');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials.');
  }

  return user;
};

export const getAllUsers = async (onlyVerified = false): Promise<IUser[]> => {
  const filter = onlyVerified ? { isVerified: true } : {};
  return await User.find(filter).select('-password -otp -otpExpires');
};
