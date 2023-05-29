import { prisma } from "@/lib/prisma";

const findAll = async () => await prisma.user.findMany();

const findById = async (id: string) =>
  await prisma.user.findUnique({
    where: {
      id,
    },
  });

const User = {
  findAll,
  findById,
};

export default User;
