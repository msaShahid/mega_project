import { Types } from 'mongoose';

declare module 'socket.io' {
  interface Socket {
    data: {
      user?: {
        _id: Types.ObjectId;
        email: string;
        name: string;
      };
    };
  }
}
