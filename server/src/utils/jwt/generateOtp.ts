interface OtpOptions {
  length?: number; 
  expiresInMinutes?: number; 
}

interface GeneratedOtp {
  otp: string;
  otpExpires: Date;
}

/**
 * Generates a numeric OTP and its expiration timestamp
 * @param options OtpOptions
 * @returns {GeneratedOtp}
 */
export const generateOtp = (options: OtpOptions = {}): GeneratedOtp => {
  const {
    length = 6,
    expiresInMinutes = 10,
  } = options;

  if (length <= 0) {
    throw new Error('OTP length must be a positive number.');
  }

  const max = Math.pow(10, length) - 1;
  const min = Math.pow(10, length - 1);

  const otp = Math.floor(min + Math.random() * (max - min + 1)).toString();

  const otpExpires = new Date(Date.now() + expiresInMinutes * 60 * 1000);

  return { otp, otpExpires };
};
