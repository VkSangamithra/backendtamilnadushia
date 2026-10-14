import { getActivities, updateActivities } from '../services/db.service.js';

export const fetchActivities = (req, res, next) => {
  try {
    const activities = getActivities();
    return res.status(200).json({
      success: true,
      data: activities,
    });
  } catch (error) {
    return next(error);
  }
};

export const saveActivities = (req, res, next) => {
  try {
    const updated = updateActivities(req.body);
    return res.status(200).json({
      success: true,
      message: 'Activities updated successfully',
      data: updated,
    });
  } catch (error) {
    return next(error);
  }
};

export default { fetchActivities, saveActivities };
