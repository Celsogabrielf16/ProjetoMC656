import prisma from '../configs/databaseConfig';
import { User, UserToBeCreated } from '../types/user';

export const findUserByEmail = async ({ email }: Pick<User, 'email'>): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { email } });
};

export const register = async (userData: UserToBeCreated): Promise<User> => {
    return await prisma.user.create({
        data: userData
    });
};

export const getAllUsers = async (): Promise<User[] | null> => {
    return await prisma.user.findMany();
};