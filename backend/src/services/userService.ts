import * as userModel from '../models/userModel';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/authUtils';


export const login = async (email: string, password: string) => {
    const user = await userModel.findUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password)))
        throw new Error('Credenciais inválidas');

    return generateToken(user.id, user.email);
}

export const register = async (name: string, email: string, passsword: string) => {
    const existingUser = await userModel.findUserByEmail(email);

    if (existingUser)
        throw new Error('Usuário já existe');

    const hashedPassword = await bcrypt.hash(passsword, 10);

    const user = await userModel.register(name, email, hashedPassword);

    if (!user)
        throw new Error('Erro ao fazer o cadastro');

    return generateToken(user.id, user.email);
}

export const getAllUsers = async () => {
    const users = await userModel.getAllUsers();

    if (!users || users.length === 0)
        throw new Error('Nenhum usuário encontrado');

    return users;
} 