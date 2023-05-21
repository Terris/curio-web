import { Resolver, ResolverFn, UserResolvers } from "@/types/graphql";

const usersResolver = {
  users: (parent, args, context) => {
    console.log("context", context);
    return [
      {
        id: "TEST_ID",
        email: "TEST_EMAIL",
      },
    ];
  },
};

export default usersResolver;
