import mongoose from 'mongoose';
import logger from '../utils/logger.js';

const connectDB = async (uri) => {
  try {
    if (!uri || typeof uri !== 'string') {
      throw new Error('Invalid or missing MongoDB URI in environment variables');
    }

    await mongoose.connect(uri);
    logger.info('✅ MongoDB connected successfully');
  } catch (err) {
    logger.error(`❌ DB connection failed: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
