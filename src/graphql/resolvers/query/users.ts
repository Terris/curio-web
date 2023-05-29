import { QueryResolvers } from "@/types/resolvers";
import * as users from "../../services/users";

const resolveUsers: QueryResolvers["users"] = async (parent, args, context) =>
  users.findAll();

export default resolveUsers;
