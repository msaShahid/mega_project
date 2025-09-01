import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import config from './config/index'; 
import connectDB from './config/db';
import logger from './utils/logger';
import errorHandler from './middleware/error.middleware';

// Connect to MongoDB
connectDB(config.mongoURI);

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(
    morgan('combined', {
      stream: {
        write: (msg: string) => logger.info(msg.trim()),
      },
    })
  );
}

// Error handler middleware 
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  logger.info(`🚀 Server running on port ${config.port}`);
});
