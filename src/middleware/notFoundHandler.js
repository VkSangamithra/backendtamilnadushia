/**
 * Middleware to handle 404 Not Found errors for unmatched routes
 */
export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: `Route not found: ${req.method} ${req.originalUrl}`,
      status: 404,
      timestamp: new Date().toISOString(),
    },
  });
};

export default notFoundHandler;
