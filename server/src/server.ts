import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';

import config from './config/index'; 
import connectDB from './config/db';
import logger from './utils/logger';
import errorHandler from './middlewares/error.middleware';
import limiter from './middlewares/rateLimiter'
import authRoutes from './routes/auth.routes';

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

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello Secure TypeScript World!');
});

// Error handler middleware 
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  logger.info(`🚀 Server running on port ${config.port}`);
});
