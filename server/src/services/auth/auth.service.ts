import User, { IUser } from '@models/auth/user.model';
import UserProfile from '@models/auth/userProfile.model';
import {generateOtp} from '@utils/jwt/generateOtp';
import { normalizeEmail } from '@utils/string/normalizeEmail';
import { sendOtpEmail } from '@utils/mail/mailOtp';
import errorFactory from '@utils/errors/errorFactory';
import { generateResetToken } from '@utils/jwt/generateResetToken';
import { sendResetPasswordEmail } from '@utils/mail/sendResetPasswordEmail';

class AuthService {

  private userModel = User;
  private userProfileModel = UserProfile;

  async registerUser(data: {name: string;email: string;password: string;}): Promise<IUser> {
    const { name, email, password } = data;
    const normalizedEmail = normalizeEmail(email);

    const existingUser = await this.userModel.findOne({ email: normalizedEmail });

    if (existingUser && existingUser.isVerified) {
      throw errorFactory.userAlreadyRegistered();
    }

    const { otp, otpExpires } = generateOtp();

    if (existingUser) {
      const updatedUser = await this.userModel.findOneAndUpdate(
        { email: normalizedEmail },
        { otp, otpExpires },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error('User not found after update');
      }

      await sendOtpEmail(email, otp);

      return updatedUser;
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

    await this.userProfileModel.create({
      user: newUser._id,
      name: newUser.name,
    });

    await sendOtpEmail(email, otp);

    return newUser;
  };

  async verifyUserOtp(data: {email: string;otp: string;}): Promise<IUser> {
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

  async resendUserOtp(email: string): Promise<void> {
    
    const normalizedEmail = normalizeEmail(email);
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) throw errorFactory.userNotFound();
    if (user.isVerified) throw errorFactory.userAlreadyVerified();

    const { otp, otpExpires } = generateOtp();

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    await sendOtpEmail(user.email, otp); 
  };

  async loginUser(data: { email: string; password: string }): Promise<IUser> {
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

  async forgotUserPassword(email: string): Promise<void> {
    const normalizedEmail = normalizeEmail(email);
    const user = await User.findOne({ email: normalizedEmail });
    
    if (!user) throw errorFactory.userNotFound(); 
    
    const { token, tokenExpires } = generateResetToken();

    user.resetToken = token;
    user.resetTokenExpires = tokenExpires;
    await user.save();

    await sendResetPasswordEmail(user.email, token);
  };

  async resetUserPassword(data: { email: string; token: string; newPassword: string }): Promise<IUser> {
    const { email, token, newPassword } = data;
    const normalizedEmail = normalizeEmail(email);

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) throw errorFactory.userNotFound();

    if (!user.resetToken || !user.resetTokenExpires || user.resetTokenExpires < new Date()) {
      throw errorFactory.invalidOrExpiredResetToken();
    }

    if (user.resetToken !== token) {
      throw errorFactory.invalidResetToken();
    }

    user.password = newPassword; 
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;

    await user.save();

    return user;
  };

  async getAllUsers(onlyVerified = false): Promise<IUser[]> {
    const filter = onlyVerified ? { isVerified: true } : {};
    return await User.find(filter).select('-password -otp -otpExpires -resetToken -resetTokenExpires');
  };

}

export default new AuthService();