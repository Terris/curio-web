import { QueryResolvers } from "@/types/graphql";
import { prisma } from "@/lib/prisma";

export const getUsers: QueryResolvers["users"] = async (
  parent,
  args,
  context
) => {
  const users = await prisma.user.findMany();
  return users;
};
