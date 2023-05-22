import { Resolvers } from "@/types/graphql";
import { getUsers } from "@/graphql/services";

export const resolvers: Resolvers = {
  Query: {
    users: getUsers,
  },
};
