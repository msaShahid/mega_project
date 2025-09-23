import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import { Server } from 'socket.io';
import http from 'http';

import config from '@config/index'; 
import connectDB from '@config/db';
import logger from '@utils/logger';
import errorHandler from './middlewares/error.middleware';
import limiter from '@middlewares/rateLimiter'
import authRoutes from '@routes/auth.routes';
import chatRoute from  '@routes/chat.routes'
import friendRoute from  '@routes/friend.routes'
import { authenticateSocket } from 'socket/authenticateSocket';
import { registerChatHandlers } from 'socket/chatHandlers';

// Connect to MongoDB
connectDB(config.mongoURI);

// Initialize Express app
const app = express();

// Apply security middlewares
app.use(helmet());      

// Middlewares
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(limiter);

if (process.env.NODE_ENV !== 'test') {
  app.use(
    morgan('combined', {
      stream: {
        write: (msg: string) => logger.info(msg.trim()),
      },
    })
  );
}

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }, // adjust as needed
});

// Use socket authentication
io.use(authenticateSocket);

// Handle authenticated socket connections
io.on('connection', (socket) => {
  const user = socket.data.user;
  console.log('Socket connected:', user?.email);

  registerChatHandlers(io, socket); // Chat logic here

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', user?.email);
  });
})

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoute);
app.use('/api/friends', friendRoute);

app.get('/', (req, res) => {
  res.send('Hello Secure TypeScript World!');
});

// Error handler middleware 
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  logger.info(`🚀 Server running on port ${config.port}`);
});
