import prisma from '../configs/databaseConfig';
import { Bike, BikeToBeCreated } from '../types/bike';

export const getAllBikes = async (): Promise<Bike[] | null> => {
    return await prisma.bike.findMany();
}

export const getBikeById = async (id: number): Promise<Bike | null> => {
    return await prisma.bike.findUnique({
        where: { id },
        include: {
            owner: {
                select: {
                    name: true,
                    rating: true,
                    createdAt: true,
                }
            },
            reviews: true,
        }
    });
}

export const createBike = async (bikeData: BikeToBeCreated): Promise<Bike> => {
    return await prisma.bike.create({
        data: bikeData
    });
}