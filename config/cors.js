import config from './index.js';

export const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl, Postman, server-to-server)
    if (!origin) {
      return callback(null, true);
    }

    if (config.allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // In development mode, allow localhost with any port if needed
    if (!config.isProduction && /^http:\/\/localhost(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }

    const error = new Error(`CORS policy does not allow access from origin: ${origin}`);
    error.status = 403;
    return callback(error, false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  optionsSuccessStatus: 200,
};

export default corsOptions;
