import os from 'os';
import config from '../../config/index.js';

/**
 * Service to aggregate server health and diagnostic metrics
 */
export const getHealthStatus = () => {
  const uptimeSeconds = process.uptime();
  
  return {
    status: 'ok',
    message: 'Tamil Nadu Shia Muslim Jamaat API is healthy and operational',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(uptimeSeconds)} seconds`,
    environment: config.nodeEnv,
    version: '1.0.0',
  };
};

/**
 * Extended system diagnostics for administrative monitoring
 */
export const getDetailedHealthStatus = () => {
  const baseHealth = getHealthStatus();
  const memoryUsage = process.memoryUsage();

  return {
    ...baseHealth,
    system: {
      platform: os.platform(),
      nodeVersion: process.version,
      cpuArch: os.arch(),
      totalMemoryMB: Math.round(os.totalmem() / (1024 * 1024)),
      freeMemoryMB: Math.round(os.freemem() / (1024 * 1024)),
      memoryUsageMB: {
        rss: Math.round(memoryUsage.rss / (1024 * 1024)),
        heapTotal: Math.round(memoryUsage.heapTotal / (1024 * 1024)),
        heapUsed: Math.round(memoryUsage.heapUsed / (1024 * 1024)),
      },
    },
  };
};
