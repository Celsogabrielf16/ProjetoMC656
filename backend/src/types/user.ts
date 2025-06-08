import { Prisma, User as PrismaUser } from "@prisma/client";
import { userInclude } from "../includes/userIncludes";

export type User = PrismaUser;

export type UserToBeCreated = {
  name: string;
  email: string;
  password: string;
};

export type UserWithRelations = Prisma.UserGetPayload<{
  include: typeof userInclude;
}>;