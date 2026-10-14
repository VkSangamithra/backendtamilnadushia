import { Router } from 'express';
import { fetchAnnouncements, saveAnnouncements } from '../controllers/announcements.controller.js';
import requireAuth from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', fetchAnnouncements);
router.put('/', requireAuth, saveAnnouncements);

export default router;
