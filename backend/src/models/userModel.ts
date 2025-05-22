import prisma from '../configs/databaseConfig';
import { User, UserToBeCreated } from '../types/user';

type None = undefined | null

export const findUserByEmail = async ({ email }: Pick<User, 'email'>): Promise<User | None> => {
  return await prisma.user.findUnique({ where: { email } });
};

export const register = async ({ name, email, hashedPassword }: UserToBeCreated): Promise<User> => {
    return await prisma.user.create({
        data: { name, email, password: hashedPassword }
    });
};

export const getAllUsers = async (): Promise<User[] | None> => {
    return await prisma.user.findMany();
};