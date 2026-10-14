import morgan from 'morgan';
import config from '../../config/index.js';

/**
 * HTTP request logger middleware using morgan
 */
export const requestLogger = () => {
  const format = config.isProduction ? 'combined' : 'dev';
  return morgan(format, {
    skip: (req) => config.nodeEnv === 'test' && req.url === '/health',
  });
};

export default requestLogger;
