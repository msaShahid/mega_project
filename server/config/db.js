import mongoose from 'mongoose';
import logger from '../utils/logger.js';

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error('DB connection failed', err);
    process.exit(1);
  }
};

export default connectDB;
