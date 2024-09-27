import jwt from 'jsonwebtoken';

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, 'secretKey', { expiresIn: '2h' });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, 'secretKey');
  } catch (error) {
    return null;
  }
};