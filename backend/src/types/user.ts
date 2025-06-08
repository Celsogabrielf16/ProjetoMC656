import { User as PrismaUser } from "@prisma/client";

export type User = PrismaUser;

export type UserToBeCreated = {
  name: string;
  email: string;
  password: string;
};
