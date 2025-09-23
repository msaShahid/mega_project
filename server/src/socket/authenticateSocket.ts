import { Socket } from 'socket.io';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

interface JwtPayload {
  _id: string;
  email: string;
  name: string;
}

export const authenticateSocket = (socket: Socket, next: (err?: Error) => void) => {
  const token = socket.handshake.auth?.token || socket.handshake.headers['authorization']?.split(' ')[1];

  if (!token) {
    return next(new Error('Authentication token missing'));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    // Attach user info to socket
    socket.data.user = {
      _id: new Types.ObjectId(decoded._id),
      email: decoded.email,
      name: decoded.name,
    };

    next();
  } catch (err) {
    return next(new Error('Invalid or expired token'));
  }
};
