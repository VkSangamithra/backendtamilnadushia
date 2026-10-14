import config from '../../config/index.js';

/**
 * Global centralized error handling middleware
 */
export const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const statusCode = err.status || err.statusCode || 500;
  
  const response = {
    success: false,
    error: {
      message: err.message || 'Internal Server Error',
      status: statusCode,
      timestamp: new Date().toISOString(),
    },
  };

  // Include stack trace only in development
  if (!config.isProduction && err.stack) {
    response.error.stack = err.stack;
  }

  // Log error in non-test environments
  if (config.nodeEnv !== 'test') {
    console.error(`[Error] ${req.method} ${req.originalUrl} - Status: ${statusCode} - ${err.message}`);
  }

  res.status(statusCode).json(response);
};

export default errorHandler;
