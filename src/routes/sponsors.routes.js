import { Router } from 'express';
import { fetchSponsors, saveSponsors } from '../controllers/sponsors.controller.js';
import requireAuth from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', fetchSponsors);
router.put('/', requireAuth, saveSponsors);

export default router;
