import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export interface AuthenticatedRequest extends Request {
  user?: {
    _id: Types.ObjectId;
    email: string;
    name: string;
  };
}

interface JwtPayload {
  _id: string; 
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}

export const authenticate = (
  req: Request, 
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization token missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    (req as AuthenticatedRequest).user = {
      _id: new Types.ObjectId(decoded._id),
      email: decoded.email,
      name: decoded.name,
    };

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
