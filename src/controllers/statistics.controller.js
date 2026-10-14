import { getStatistics, updateStatistics } from '../services/db.service.js';

export const fetchStatistics = (req, res, next) => {
  try {
    const stats = getStatistics();
    return res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    return next(error);
  }
};

export const saveStatistics = (req, res, next) => {
  try {
    const updated = updateStatistics(req.body);
    return res.status(200).json({
      success: true,
      message: 'Statistics updated successfully',
      data: updated,
    });
  } catch (error) {
    return next(error);
  }
};

export default { fetchStatistics, saveStatistics };
