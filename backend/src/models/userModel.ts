import prisma from '../configs/databaseConfig';
import { userInclude } from '../includes/userIncludes';
import { User, UserToBeCreated, UserWithRelations } from '../types/user';
import { Bike } from '../types/bike';
import { Rental } from '../types/rental';
import { Chat } from '../types/chat';

export const getAllUsers = async (): Promise<User[] | null> => {
    return await prisma.user.findMany();
};

export const findUserByEmail = async ({ email }: Pick<User, 'email'>): Promise<User | null> => {
    return await prisma.user.findUnique({ where: { email } });
};

export const register = async (userData: UserToBeCreated): Promise<User> => {
    return await prisma.user.create({
        data: userData
    });
};

export const findUserById = async (id: number): Promise<UserWithRelations | null> => {
    return await prisma.user.findUnique({
        where: { id },
        include: userInclude
    });
}

export const listUserBikes = async (id: number): Promise<Bike[]> => {
    const user = await findUserById(id);
    return user?.bikes ?? [];
}

export const listUserRentals = async (id: number): Promise<Rental[] | null> => {
    const user = await findUserById(id);
    return user?.rentals ?? [];
}

export const listUserChats = async (id: number): Promise<Chat[] | null> => {
    const user = await findUserById(id);
    return [...(user?.sentChats ?? []), ...(user?.receivedChats ?? [])];
}