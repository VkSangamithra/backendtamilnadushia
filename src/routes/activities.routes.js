import { Router } from 'express';
import { fetchActivities, saveActivities } from '../controllers/activities.controller.js';
import requireAuth from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', fetchActivities);
router.put('/', requireAuth, saveActivities);

export default router;
