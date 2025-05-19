import prisma from '../configs/databaseConfig';

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};

export const register = async (name: string, email: string, hashedPassword: string) => {
    return await prisma.user.create({
        data: { name, email, password: hashedPassword }
    });
};

export const getAllUsers = async () => {
    return await prisma.user.findMany();
};