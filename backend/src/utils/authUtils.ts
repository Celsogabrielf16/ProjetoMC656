import jwt from 'jsonwebtoken';

export const generateToken = (id: number, email: string) => {
    return jwt.sign({ id, email }, process.env.JWT_WORD!, { expiresIn: '30d' });
};

export const extractUserIdFromToken = (authorizationHeader?: string): number => {
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer '))
    throw new Error('Token ausente ou mal formatado');

  const token = authorizationHeader.split(' ')[1];
  const payload = jwt.verify(token, process.env.JWT_WORD!) as { id: number };
  
  return payload.id;
};