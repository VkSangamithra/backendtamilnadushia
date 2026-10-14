import { getTracks, updateTracks } from '../services/db.service.js';

export const fetchTracks = (req, res, next) => {
  try {
    const tracks = getTracks();
    return res.status(200).json({
      success: true,
      data: tracks,
    });
  } catch (error) {
    return next(error);
  }
};

export const saveTracks = (req, res, next) => {
  try {
    const updated = updateTracks(req.body);
    return res.status(200).json({
      success: true,
      message: 'Tracks updated successfully',
      data: updated,
    });
  } catch (error) {
    return next(error);
  }
};

export default { fetchTracks, saveTracks };
