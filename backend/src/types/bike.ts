import { Prisma, Bike as PrismaBike } from '@prisma/client';
import { bikeInclude } from '../includes/bikeIncludes';

export type Bike = PrismaBike;

export type BikeWithRelations = Prisma.BikeGetPayload<{
  include: typeof bikeInclude;
}>;
