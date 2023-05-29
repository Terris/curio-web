import { QueryResolvers } from "@/types/resolvers";
import { prisma } from "@/lib/prisma";

export const findAll = async () => await prisma.user.findMany();

export const findAllById = async (id: string) =>
  await prisma.user.findUnique({
    where: {
      id,
    },
  });
