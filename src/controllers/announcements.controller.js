import { getAnnouncements, updateAnnouncements } from '../services/db.service.js';

export const fetchAnnouncements = (req, res, next) => {
  try {
    const announcements = getAnnouncements();
    return res.status(200).json({
      success: true,
      data: announcements,
    });
  } catch (error) {
    return next(error);
  }
};

export const saveAnnouncements = (req, res, next) => {
  try {
    const updated = updateAnnouncements(req.body);
    return res.status(200).json({
      success: true,
      message: 'Announcements updated successfully',
      data: updated,
    });
  } catch (error) {
    return next(error);
  }
};

export default { fetchAnnouncements, saveAnnouncements };
