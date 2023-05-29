import { QueryResolvers, UserResolvers } from "@/types/resolvers";
import { prisma } from "@/lib/prisma";

export const findAll = async () =>
  await prisma.note.findMany({
    include: {
      user: true,
    },
  });

export const findAllByUserId = async (id: string) =>
  await prisma.note.findMany({
    where: {
      userId: id,
    },
    include: {
      user: true,
    },
  });
