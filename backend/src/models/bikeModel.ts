import prisma from '../configs/databaseConfig';
import { Bike, BikeFilter, BikeToBeCreated } from '../types/bike';

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

export const filterBike = async ({model, maxPrice}: Pick<BikeFilter, 'model' | 'maxPrice'>) => {
    return await prisma.bike.findMany({
        where: {
            isAvailable: true,
            model: model ? {
                contains: model,
                mode: 'insensitive',
            }: undefined,
            hourlyRate: maxPrice ? {
                lte: maxPrice,
            } : undefined,
        },
    });
}

export const createBike = async (bikeData: BikeToBeCreated): Promise<Bike> => {
    return await prisma.bike.create({
        data: bikeData
    });
}