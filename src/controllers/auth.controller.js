import { authenticateAdmin } from '../services/auth.service.js';

export const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Username and password are required.',
    });
  }

  const result = authenticateAdmin(username.trim(), password);
  if (!result.success) {
    return res.status(401).json({
      success: false,
      message: result.message,
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Authentication successful',
    token: result.token,
    user: result.user,
  });
};

export const getMe = (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user,
  });
};

export default { login, getMe };
