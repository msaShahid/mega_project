import { Request, Response } from 'express';
import { registerUser, verifyUserOtp, loginUser, getAllUsers, resendUserOtp, forgotUserPassword, resetUserPassword } from '@services/auth/auth.service';
import { registerSchema, loginSchema, verifyOtpSchema, resendOtpSchema } from '@validators/auth/auth.validation';
import { generateToken } from '@utils/jwt';
import errorFactory from '@utils/errorFactory';
import successFactory from '@utils/successFactory';

export const register = async (req: Request, res: Response) => {
  try {
    const parsed = registerSchema.parse(req.body);
    const user = await registerUser(parsed);

    return res.status(user.isVerified ? 200 : 201).json({
      message: user.isVerified
        ? 'User verified successfully. You can now log in.'
        : 'User registered. Please verify the OTP sent to your email.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
    });
  } catch (error: any) {
    if (error.errors) {
      // Zod validation error
      return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
    }
    res.status(400).json({ error: error.message || errorFactory.generalError() });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const parsed = verifyOtpSchema.parse(req.body);
    const user = await verifyUserOtp(parsed);

    return res.status(200).json({
      message: 'Account verified successfully.',
      user: {
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
    });
  } catch (err) {
    return res.status(400).json({
      error: err instanceof Error ? err.message : errorFactory.unexpectedError,
    });
  }
};

export const resendOtp = async (req: Request, res: Response) => {
  try {
    const parsed = resendOtpSchema.parse(req.body); 

    await resendUserOtp(parsed.email);

    return res.status(200).json({
      message: 'OTP has been resent successfully.',
    });
  } catch (err) {
    return res.status(400).json({
      error: err instanceof Error ? err.message : errorFactory.unexpectedError,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const parsed = loginSchema.parse(req.body);

    const user = await loginUser(parsed);
    const token = generateToken(user);

    const responseData = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
    return res.json(successFactory.loginSuccess(responseData));
    
  } catch (error: any) {
    if (error.errors) {
      return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
    }
    res.status(400).json({ error: error.message || errorFactory.generalError() });
  }
};

export const forgotPassword = async (req: Request, res: Response)=> {
  const { email } = req.body;
  
  try {
    await forgotUserPassword(email);
    res.status(200).json({
      message: 'Password reset link sent to your email.',
    });
  } catch (error: any) {
    if (error.errors) {
      return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
    }
    res.status(400).json({ error: error.message || errorFactory.generalError() });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, token, newPassword } = req.body;

  try {
    const updatedUser = await resetUserPassword({ email, token, newPassword });
    res.status(200).json({
      message: 'Password has been reset successfully.',
      user: updatedUser,
    });
  } catch (error: any) {
    if (error.errors) {
      return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
    }
    res.status(400).json({ error: error.message || errorFactory.generalError() });
  }
};


export const listUsers = async (req: Request, res: Response) => {
  try {
    const onlyVerified = req.query.verified === 'true';
    const users = await getAllUsers(onlyVerified);

    return res.json(successFactory.dataFetched(users));

  } catch (error: any) {

    console.error('Failed to fetch users:', error);
    return res.json(errorFactory.fetchDataFailed());
  }
};
