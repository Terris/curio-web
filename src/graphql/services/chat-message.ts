import { prisma } from "@/lib/prisma";

const findAll = async () =>
  await prisma.chatMessage.findMany({
    include: {
      chat: true,
    },
  });

const findAllByChatId = async (id: string) =>
  await prisma.chatMessage.findMany({
    where: {
      chatId: id,
    },
    include: {
      chat: true,
    },
  });

const ChatMessage = {
  findAll,
  findAllByChatId,
};

export default ChatMessage;
