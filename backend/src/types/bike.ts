import { Prisma, Bike as PrismaBike } from '@prisma/client';
import { bikeInclude } from '../includes/bikeIncludes';

export type Bike = PrismaBike;

export type BikeToBeCreated = {
  ownerId: number;
  model: string;
  description: string;
  size: string;
  imagePath: string;
  hourlyRate: number;
  maxUsageTime: number;
  lateFee: number;
  locationLat: number;
  locationLng: number;
};

export type BikeFilter = {
  model?: string;
  maxPrice?: number;
  maxDistance?: number;
  userLat?: number;
  userLng?: number;
}

export type BikeWithRelations = Prisma.BikeGetPayload<{
  include: typeof bikeInclude;
}>;
