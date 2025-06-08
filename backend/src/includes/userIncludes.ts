import { Prisma } from '@prisma/client';

export const userInclude = Prisma.validator<Prisma.UserInclude>()({
  bikes: true,
  rentals: true,
  reviews: true,
  sentChats: true,
  receivedChats: true,
  messages: true
});