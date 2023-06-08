import { prisma } from "@/lib/prisma";

const findAll = async () =>
  await prisma.chat.findMany({
    include: {
      user: true,
    },
  });

const findAllByUserId = async (id: string) =>
  await prisma.chat.findMany({
    where: {
      userId: id,
    },
    include: {
      user: true,
    },
  });

const Chat = {
  findAll,
  findAllByUserId,
};

export default Chat;
