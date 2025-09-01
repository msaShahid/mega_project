import User, { IUser } from '../../models/auth/user.model';

const OTP_EXPIRATION_MINUTES = 10;

const generateOtp = (): string => {
  return (Math.floor(100000 + Math.random() * 900000)).toString(); // 6-digit OTP
};

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  verifyOtp?: string;
}): Promise<IUser> => {
  const { name, email, password, verifyOtp } = data;

  let user = await User.findOne({ email });

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
  const otp = generateOtp();
  const otpExpires = new Date(Date.now() + OTP_EXPIRATION_MINUTES * 60 * 1000);

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

  const user = await User.findOne({ email });
  if (!user || !user.isVerified) {
    throw new Error('Invalid credentials or email not verified.');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials.');
  }

  return user;
};
