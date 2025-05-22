// src/utils/authUtils.ts
import jwt from 'jsonwebtoken';

export const generateToken = (id: number, email: string) => {
    return jwt.sign({ id, email }, process.env.JWT_WORD!, { expiresIn: '30d' });
};
