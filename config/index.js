import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const parseAllowedOrigins = (originsString) => {
  if (!originsString) {
    return ['http://localhost:5173', 'http://127.0.0.1:5173'];
  }
  return originsString.split(',').map((origin) => origin.trim()).filter(Boolean);
};

export const config = {
  port: parseInt(process.env.PORT, 10) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  allowedOrigins: parseAllowedOrigins(process.env.ALLOWED_ORIGINS),
  
  // Admin Auth
  jwtSecret: process.env.JWT_SECRET || 'super_secret_jwt_key_change_in_production_99887766',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  adminUsername: process.env.ADMIN_USERNAME || 'admin',
  adminPassword: process.env.ADMIN_PASSWORD || 'Admin@12345',
  
  // Storage & Paths
  rootDir,
  uploadDir: path.resolve(rootDir, process.env.UPLOAD_DIR || 'uploads'),
  dataDir: path.resolve(rootDir, 'data'),
  maxFileSizeMb: parseInt(process.env.MAX_FILE_SIZE_MB, 10) || 10,
};

export default config;
