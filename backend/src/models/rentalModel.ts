import prisma from "../configs/databaseConfig";
import { Rental } from "../types/rental";

export const getRentalByUserId = async (userId: number): Promise<Rental[] | null> => {
    return await prisma.rental.findMany({
        where: { userId },
        include: {
            bike: true,
            user: true
        }
    });
}