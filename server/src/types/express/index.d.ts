import { Types } from 'mongoose';
import { Server as SocketIOServer } from 'socket.io';

declare global {
  namespace Express {
    interface Request {
      user?: {
        _id: Types.ObjectId;
        email: string;
        name: string;
      };
      io?: SocketIOServer;
    }
  }
}
