import {
  getBranding,
  updateBranding,
  getObjectives,
  updateObjectives,
  getFounders,
  updateFounders,
  getMosqueGuide,
  updateMosqueGuide,
  getVideos,
  updateVideos,
} from '../services/db.service.js';

export const fetchBranding = (req, res, next) => {
  try {
    return res.status(200).json({ success: true, data: getBranding() });
  } catch (e) {
    return next(e);
  }
};

export const saveBranding = (req, res, next) => {
  try {
    const updated = updateBranding(req.body);
    return res.status(200).json({ success: true, message: 'Branding updated successfully', data: updated });
  } catch (e) {
    return next(e);
  }
};

export const fetchObjectives = (req, res, next) => {
  try {
    return res.status(200).json({ success: true, data: getObjectives() });
  } catch (e) {
    return next(e);
  }
};

export const saveObjectives = (req, res, next) => {
  try {
    const updated = updateObjectives(req.body);
    return res.status(200).json({ success: true, message: 'Objectives updated successfully', data: updated });
  } catch (e) {
    return next(e);
  }
};

export const fetchFounders = (req, res, next) => {
  try {
    return res.status(200).json({ success: true, data: getFounders() });
  } catch (e) {
    return next(e);
  }
};

export const saveFounders = (req, res, next) => {
  try {
    const updated = updateFounders(req.body);
    return res.status(200).json({ success: true, message: 'Office Bearers updated successfully', data: updated });
  } catch (e) {
    return next(e);
  }
};

export const fetchMosqueGuide = (req, res, next) => {
  try {
    return res.status(200).json({ success: true, data: getMosqueGuide() });
  } catch (e) {
    return next(e);
  }
};

export const saveMosqueGuide = (req, res, next) => {
  try {
    const updated = updateMosqueGuide(req.body);
    return res.status(200).json({ success: true, message: 'Mosque directory updated successfully', data: updated });
  } catch (e) {
    return next(e);
  }
};

export const fetchVideos = (req, res, next) => {
  try {
    return res.status(200).json({ success: true, data: getVideos() });
  } catch (e) {
    return next(e);
  }
};

export const saveVideos = (req, res, next) => {
  try {
    const updated = updateVideos(req.body);
    return res.status(200).json({ success: true, message: 'Videos updated successfully', data: updated });
  } catch (e) {
    return next(e);
  }
};

export default {
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
};
