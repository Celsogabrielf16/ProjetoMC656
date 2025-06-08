import { Prisma } from '@prisma/client';

export const bikeInclude = Prisma.validator<Prisma.BikeInclude>()({
  owner: true,
  reviews: true
});