import { Router } from 'express';
import { fetchImages, saveImages, handleImageUpload } from '../controllers/images.controller.js';
import requireAuth from '../middleware/auth.middleware.js';
import upload from '../middleware/upload.middleware.js';

const router = Router();

router.get('/', fetchImages);
router.put('/', requireAuth, saveImages);
router.post('/upload', requireAuth, upload.single('image'), handleImageUpload);

export default router;
