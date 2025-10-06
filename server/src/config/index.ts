import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

const NODE_ENV = process.env.NODE_ENV?.trim() || 'development';

const isProduction = NODE_ENV === 'production';
const isDevelopment = NODE_ENV === 'development';
const isTest = NODE_ENV === 'test';

const envFileMap: Record<string, string> = {
  production: '.env.production',
  development: '.env.development',
  test: '.env.test',
};

const envFileName = envFileMap[NODE_ENV] ?? '.env';  
const envPath = path.join(rootDir, envFileName);

// Load environment variables
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.info(`Loaded environment variables from: ${envFileName}`);
} else {
  console.warn(`Environment file "${envFileName}" not found at ${envPath}.`);
  // Attempt fallback to default `.env`
  const fallbackEnvPath = path.join(rootDir, '.env');
  if (fs.existsSync(fallbackEnvPath)) {
    dotenv.config({ path: fallbackEnvPath });
    console.info('Loaded fallback environment variables from: .env');
  } else {
    throw new Error(`No environment files found. Please create a .env or ${envFileName} file.`);
  }
}


const REQUIRED_ENV_VARS = ['MONGO_URI', 'PORT'];

REQUIRED_ENV_VARS.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Required environment variable "${key}" is missing in ${envFileName}`);
  }
});


const port = Number(process.env.PORT);
const normalizedPort = Number.isNaN(port) || port <= 0 ? 5000 : port;

export default {
  nodeEnv: NODE_ENV,
  isProduction,
  isDevelopment,
  isTest,
  apiVersion: process.env.API_VERSION ?? 'v1',
  port: normalizedPort,
  mongoURI: process.env.MONGO_URI!,
};
