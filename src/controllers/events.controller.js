import { getEvents, updateEvents } from '../services/db.service.js';

export const fetchEvents = (req, res, next) => {
  try {
    const events = getEvents();
    return res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    return next(error);
  }
};

export const saveEvents = (req, res, next) => {
  try {
    const updated = updateEvents(req.body);
    return res.status(200).json({
      success: true,
      message: 'Events updated successfully',
      data: updated,
    });
  } catch (error) {
    return next(error);
  }
};

export default { fetchEvents, saveEvents };
