import { Router } from 'express';
import { fetchEvents, saveEvents } from '../controllers/events.controller.js';
import requireAuth from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', fetchEvents);
router.put('/', requireAuth, saveEvents);

export default router;
