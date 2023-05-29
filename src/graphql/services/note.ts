import { prisma } from "@/lib/prisma";

const findAll = async () =>
  await prisma.note.findMany({
    include: {
      user: true,
    },
  });

const findAllByUserId = async (id: string) =>
  await prisma.note.findMany({
    where: {
      userId: id,
    },
    include: {
      user: true,
    },
  });

const Note = {
  findAll,
  findAllByUserId,
};

export default Note;
