import prisma from "../configs/databaseConfig";
import { Rental, RentalToBeCreated } from "../types/rental";

export const getRentalByUserId = async (userId: number): Promise<Rental[] | null> => {
    return await prisma.rental.findMany({
        where: { userId },
        include: {
            bike: true,
            user: true
        }
    });
}

export const createRental = async (rentalData: RentalToBeCreated): Promise<Rental> => {
    return await prisma.rental.create({
        data: rentalData
    });
};

export const updateRental = async (id: number): Promise<Rental | null> => {
    return await prisma.rental.update({
        where: { id },
        data: {
            endTime: new Date(),
            status: 'completed',
        }
    });
}