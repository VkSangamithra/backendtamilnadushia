import { getImages, updateImages } from '../services/db.service.js';

export const fetchImages = (req, res, next) => {
  try {
    const images = getImages();
    return res.status(200).json({
      success: true,
      data: images,
    });
  } catch (error) {
    return next(error);
  }
};

export const saveImages = (req, res, next) => {
  try {
    const updated = updateImages(req.body);
    return res.status(200).json({
      success: true,
      message: 'Images updated successfully',
      data: updated,
    });
  } catch (error) {
    return next(error);
  }
};

export const handleImageUpload = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: 'No image file was uploaded.',
    });
  }

  // Construct relative URL served by Express static server
  const relativeUrl = `/uploads/${req.file.filename}`;

  return res.status(201).json({
    success: true,
    message: 'Image uploaded successfully',
    data: {
      url: relativeUrl,
      filename: req.file.filename,
      size: req.file.size,
      mimetype: req.file.mimetype,
    },
  });
};

export default { fetchImages, saveImages, handleImageUpload };
