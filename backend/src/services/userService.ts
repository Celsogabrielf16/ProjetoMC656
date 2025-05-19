import * as userModel from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (email: string, password: string) => {
    const user = await userModel.findUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password)))
        throw new Error('Credenciais inválidas');

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_WORD!, { expiresIn: '30d' });
    
    return token;
}

export const register = async (name: string, email: string, passsword: string) => {
    const existingUser = await userModel.findUserByEmail(email);

    if (existingUser)
        throw new Error('Usuário já existe');

    const hashedPassword = await bcrypt.hash(passsword, 10);

    const user = await userModel.register(name, email, hashedPassword);

    if (!user)
        throw new Error('Erro ao fazer o cadastro');

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_WORD!, { expiresIn: '30d' });

    return token;
}

export const getAllUsers = async () => {
    const users = await userModel.getAllUsers();

    if (!users || users.length === 0)
        throw new Error('Nenhum usuário encontrado');

    return users;
}