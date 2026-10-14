import { Router } from 'express';
import requireAuth from '../middleware/auth.middleware.js';
import {
  fetchBranding,
  saveBranding,
  fetchObjectives,
  saveObjectives,
  fetchFounders,
  saveFounders,
  fetchMosqueGuide,
  saveMosqueGuide,
  fetchVideos,
  saveVideos,
} from '../controllers/sections.controller.js';

const router = Router();

// Branding & Logo
router.get('/branding', fetchBranding);
router.put('/branding', requireAuth, saveBranding);

// Mission Objectives
router.get('/objectives', fetchObjectives);
router.put('/objectives', requireAuth, saveObjectives);

// Office Bearers & Founders
router.get('/founders', fetchFounders);
router.put('/founders', requireAuth, saveFounders);

// Mosque Directory
router.get('/mosque-guide', fetchMosqueGuide);
router.put('/mosque-guide', requireAuth, saveMosqueGuide);

// Videos
router.get('/videos', fetchVideos);
router.put('/videos', requireAuth, saveVideos);

export default router;
