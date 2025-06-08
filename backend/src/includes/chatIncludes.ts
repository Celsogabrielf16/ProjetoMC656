import { Prisma } from "@prisma/client";

export const chatInclude = Prisma.validator<Prisma.ChatInclude>()({
    sender: true,
    receiver: true
});