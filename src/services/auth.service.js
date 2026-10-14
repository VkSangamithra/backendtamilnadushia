import jwt from 'jsonwebtoken';
import config from '../../config/index.js';

export const generateToken = (payload) => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, config.jwtSecret);
  } catch (error) { // eslint-disable-line no-unused-vars
    return null;
  }
};

export const authenticateAdmin = (username, password) => {
  const rawUser = (username || '').trim();
  const cleanDigits = rawUser.replace(/[^0-9]/g, '');
  const lowerUser = rawUser.toLowerCase();

  // Accepted usernames (configured .env, official organization emails, website phone numbers, organization handles)
  const isUserValid =
    rawUser === config.adminUsername ||
    lowerUser === (config.adminUsername || '').toLowerCase() ||
    lowerUser === 'admin@tamilnadushiamuslim.org' ||
    lowerUser === 'admin@tamilnadushiamuslimjamaath.org' ||
    lowerUser === 'admin@shiajamaat.org' ||
    cleanDigits === '9566016668' ||
    cleanDigits === '919566016668' ||
    cleanDigits === '9444924746' ||
    cleanDigits === '9500107634' ||
    lowerUser === 'admin' ||
    lowerUser === 'jamaat_admin' ||
    lowerUser === 'tamil_nadu_shia_muslim_jamaath' ||
    lowerUser === 'mohammedakil' ||
    lowerUser === 'jamaat';

  // Accepted passwords (configured .env, official phone number, or standard administrative password)
  const isPassValid =
    password === config.adminPassword ||
    password === 'admin@123' ||
    password?.toLowerCase() === 'admin@123' ||
    password === 'Jamaat@2026' ||
    password === 'Admin@TNSMJ2026' ||
    password === 'Admin@12345' ||
    password === 'admin123' ||
    password === '9566016668' ||
    password === 'jamaat123' ||
    password === 'jamaat@123' ||
    (password && password === config.adminUsername);

  if (isUserValid && isPassValid) {
    const user = {
      username: rawUser,
      role: 'admin',
      displayName: 'Tamil Nadu Shia Muslim Jamaat Administrator',
    };
    const token = generateToken(user);
    return { success: true, user, token };
  }
  return { success: false, message: 'Invalid administrative credentials' };
};

export default {
  generateToken,
  verifyToken,
  authenticateAdmin,
};
