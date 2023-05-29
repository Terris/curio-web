import { QueryResolvers } from "@/types/resolvers";
import { User } from "../../services";

const resolveUser: QueryResolvers["user"] = async (parent, args, context) =>
  User.findById(args.id);

export default resolveUser;
