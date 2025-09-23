import { Server, Socket } from 'socket.io';

export const registerChatHandlers = (io: Server, socket: Socket) => {
  const user = socket.data.user;

  if (!user) return;

  // Join a room using user ID
  socket.join(user._id.toString());

  // Handle receiving a message
  socket.on('private_message', ({ toUserId, message }) => {
    const payload = {
      from: user._id,
      message,
      timestamp: new Date(),
    };

    // Emit message to recipient
    io.to(toUserId).emit('private_message', payload);
  });
};
