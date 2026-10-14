import { getSponsors, updateSponsors } from '../services/db.service.js';

export const fetchSponsors = (req, res, next) => {
  try {
    const sponsors = getSponsors();
    return res.status(200).json({
      success: true,
      data: sponsors,
    });
  } catch (error) {
    return next(error);
  }
};

export const saveSponsors = (req, res, next) => {
  try {
    const updated = updateSponsors(req.body);
    return res.status(200).json({
      success: true,
      message: 'Sponsors updated successfully',
      data: updated,
    });
  } catch (error) {
    return next(error);
  }
};

export default { fetchSponsors, saveSponsors };
