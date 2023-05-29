import { QueryResolvers } from "@/types/resolvers";
import { User } from "../../services";

const resolveUsers: QueryResolvers["users"] = async (parent, args, context) =>
  User.findAll();

export default resolveUsers;
