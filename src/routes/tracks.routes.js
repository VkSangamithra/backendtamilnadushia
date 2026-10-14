import { Router } from 'express';
import { fetchTracks, saveTracks } from '../controllers/tracks.controller.js';
import requireAuth from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', fetchTracks);
router.put('/', requireAuth, saveTracks);

export default router;
