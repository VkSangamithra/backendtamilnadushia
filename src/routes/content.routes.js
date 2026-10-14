import { Router } from 'express';
import { fetchContent, saveContent } from '../controllers/content.controller.js';
import requireAuth from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', fetchContent);
router.put('/', requireAuth, saveContent);

export default router;
