import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import config from './config/index.js';
import connectDB from './config/db.js';
import morgan from 'morgan';
import logger from './utils/logger.js';
import errorHandler from './middleware/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(errorHandler)

app.use(morgan('combined', {
  stream: { write: (msg) => logger.info(msg.trim()) }
}));

connectDB(config.mongoURI);
app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
