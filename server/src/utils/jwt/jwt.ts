import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../../models/auth/user.model';

const JWT_SECRET: jwt.Secret = process.env.JWT_SECRET || 'default_secret';
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || '1d';

interface JwtPayload {
  id: string;
  email: string;
  name: string;
}

export const generateToken = (user: IUser): string => {
  const payload: JwtPayload = {
    id: user._id.toString(),
    email: user.email,
    name: user.name,
  };

  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN,
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
