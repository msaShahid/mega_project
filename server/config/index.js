import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, `${process.env.NODE_ENV || 'dev'}.env`) });

export default {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI
};
