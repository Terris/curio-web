import { prisma } from "@/lib/prisma";

const findAll = async () => await prisma.user.findMany();

const findAllById = async (id: string) =>
  await prisma.user.findUnique({
    where: {
      id,
    },
  });

const User = {
  findAll,
  findAllById,
};

export default User;
