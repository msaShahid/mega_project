import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';


if (process.env.NODE_ENV === undefined) {
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const rootDir = path.resolve(__dirname, '../../');  
  const envFile = `${process.env.NODE_ENV || 'dev'}.env`;
  const envPath = path.join(rootDir, envFile);

  //console.log(`🔧 Loading env file from: ${envFile}`);  
  //console.log(`🔑 MONGO_URI: ${process.env.MONGO_URI}`);  

  dotenv.config({ path: envPath });

}

if (!process.env.MONGO_URI) {
  throw new Error('❌ MONGO_URI is not defined in the environment file');
}

export default {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI as string,
};
