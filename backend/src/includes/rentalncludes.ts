import { Prisma } from '@prisma/client';

export const rentalInclude = Prisma.validator<Prisma.RentalInclude>()({
  user: true,
  bike: true
});