import { Request, Response } from 'express';
import { registerUser, loginUser, getAllUsers } from '../../services/auth/auth.service';
import { registerSchema, loginSchema } from '../../validators/auth/auth.validation';

export const register = async (req: Request, res: Response) => {
  try {
    const parsed = registerSchema.parse(req.body);

    const user = await registerUser(parsed);

    res.status(user.isVerified ? 200 : 201).json({
      message: user.isVerified
        ? 'User verified successfully. You can now log in.'
        : 'User registered. Please verify OTP sent to your email.',
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
    res.status(400).json({ error: error.message || 'An error occurred' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const parsed = loginSchema.parse(req.body);

    const user = await loginUser(parsed);

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      // token: 'jwt_token_here' // Add JWT token generation if needed
    });
  } catch (error: any) {
    if (error.errors) {
      return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
    }
    res.status(400).json({ error: error.message || 'An error occurred' });
  }
};

export const listUsers = async (req: Request, res: Response) => {
  try {
    const onlyVerified = req.query.verified === 'true';
    const users = await getAllUsers(onlyVerified);

    res.status(200).json({ users });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
