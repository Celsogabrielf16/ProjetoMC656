import prisma from '../configs/databaseConfig';
import { Bike } from '../types/bike';

export const getAllBikes = async (): Promise<Bike[] | null> => {
    return await prisma.bike.findMany();
}