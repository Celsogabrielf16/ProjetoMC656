import prisma from '../configs/databaseConfig';
import { Bike, BikeToBeCreated } from '../types/bike';

export const getAllBikes = async (): Promise<Bike[] | null> => {
    return await prisma.bike.findMany();
}

export const createBike = async (bikeData: BikeToBeCreated): Promise<Bike> => {
    return await prisma.bike.create({
        data: bikeData
    });
}