import { Router } from 'express';
import { fetchStatistics, saveStatistics } from '../controllers/statistics.controller.js';
import requireAuth from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', fetchStatistics);
router.put('/', requireAuth, saveStatistics);

export default router;
