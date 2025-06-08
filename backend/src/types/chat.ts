import { Prisma, Chat as PrismaChat } from '@prisma/client';
import { chatInclude } from '../includes/chatIncludes';

export type Chat = PrismaChat;

export type ChatWithRelations = Prisma.ChatGetPayload<{
    include: typeof chatInclude;
}>;