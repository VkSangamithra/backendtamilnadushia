import { getHealthStatus, getDetailedHealthStatus } from '../services/health.service.js';

/**
 * Controller for standard health check
 */
export const checkHealth = (req, res, next) => {
  try {
    const health = getHealthStatus();
    return res.status(200).json(health);
  } catch (error) {
    return next(error);
  }
};

/**
 * Controller for detailed system diagnostics
 */
export const checkDetailedHealth = (req, res, next) => {
  try {
    const detailedHealth = getDetailedHealthStatus();
    return res.status(200).json(detailedHealth);
  } catch (error) {
    return next(error);
  }
};
