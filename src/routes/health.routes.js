import { Router } from 'express';
import { checkHealth, checkDetailedHealth } from '../controllers/health.controller.js';

const router = Router();

// Standard health check: GET /api/v1/health or /health
router.get('/', checkHealth);

// Detailed diagnostics: GET /api/v1/health/details
router.get('/details', checkDetailedHealth);

export default router;
