import { getContent, updateContent } from '../services/db.service.js';

export const fetchContent = (req, res, next) => {
  try {
    const content = getContent();
    return res.status(200).json({
      success: true,
      data: content,
    });
  } catch (error) {
    return next(error);
  }
};

export const saveContent = (req, res, next) => {
  try {
    const updated = updateContent(req.body);
    return res.status(200).json({
      success: true,
      message: 'Website content updated successfully',
      data: updated,
    });
  } catch (error) {
    return next(error);
  }
};

export default { fetchContent, saveContent };
