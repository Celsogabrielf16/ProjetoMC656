import { Prisma, Rental as PrismaRental } from "@prisma/client";
import { rentalInclude } from "../includes/rentalncludes";

export type Rental = PrismaRental;

export type RentalWithRelations = Prisma.RentalGetPayload<{
    include: typeof rentalInclude;
}>;