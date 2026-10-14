import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import config from './config/index.js';
import corsOptions from './config/cors.js';
import requestLogger from './src/middleware/requestLogger.js';
import notFoundHandler from './src/middleware/notFoundHandler.js';
import errorHandler from './src/middleware/errorHandler.js';
import apiRouter from './src/routes/index.js';
import { checkHealth } from './src/controllers/health.controller.js';

const app = express();

// 1. Security Headers (Allow cross-origin loading for images and static assets)
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// 2. Cross-Origin Resource Sharing
app.use(cors(corsOptions));

// 3. Body Parsing Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 4. Request Logging
app.use(requestLogger());

// 5. Direct Root Health Check
app.get('/health', checkHealth);

// 6. Serve Uploaded Assets with open CORS headers
app.use(
  '/uploads',
  (req, res, next) => {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  },
  express.static(config.uploadDir)
);

// 7. Base Welcome Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Tamil Nadu Shia Muslim Jamaat API Server',
    environment: config.nodeEnv,
    healthCheck: '/health',
    apiRoot: `${config.apiPrefix}`,
  });
});

// 8. API Versioned Routes with No-Cache Headers
app.use(config.apiPrefix, (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});
app.use(config.apiPrefix, apiRouter);

// 8. 404 Not Found Handler
app.use(notFoundHandler);

// 9. Centralized Error Handler
app.use(errorHandler);

// Start Server
const server = app.listen(config.port, () => {
  console.log('====================================================');
  console.log(`🚀 Server running in [${config.nodeEnv}] mode`);
  console.log(`🌐 Server URL:        http://localhost:${config.port}`);
  console.log(`🩺 Health Check:      http://localhost:${config.port}/health`);
  console.log(`📡 API Base:          http://localhost:${config.port}${config.apiPrefix}`);
  console.log(`🔒 Allowed Origins:   ${config.allowedOrigins.join(', ')}`);
  console.log('====================================================');
});

// Graceful Shutdown handling
const handleShutdown = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });

  // Force close if graceful close takes too long
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));

export default app;
