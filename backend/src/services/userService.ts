import * as userModel from '../models/userModel';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/authUtils';

import { User } from '../types/user';

export const login = async ({ email, password }: Pick<User, 'email' | 'password'>) => {
    const user = await userModel.findUserByEmail({ email });

    if (!user) {
        throw new Error('Credenciais inválidas');
    }

    const arePasswordsEqual = await bcrypt.compare(password, user.password)

    if (!arePasswordsEqual) {
        throw new Error('Credenciais inválidas');
    }

    return generateToken(user.id, user.email);
}

export const register = async ({ name, email, password }: Pick<User, 'name' | 'email' | 'password'>) => {
    const existingUser = await userModel.findUserByEmail({ email });

    if (existingUser) {
        throw new Error('Usuário já existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.register({ name, email, hashedPassword });

    if (!user) {
        throw new Error('Erro ao fazer o cadastro');
    }

    return generateToken(user.id, user.email);
}

export const getAllUsers = async () => {
    const users = await userModel.getAllUsers();

    if (!users || users.length === 0) {
        throw new Error('Nenhum usuário encontrado');
    }

    return users;
} 