// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createYoga, createSchema } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Session } from "next-auth";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { schema } from "@/graphql";

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

export default createYoga<
  {
    req: NextApiRequest;
    res: NextApiResponse;
  },
  {
    session: Session;
  }
>({
  context: async ({ req, res }) => {
    return {
      session: (await getServerSession(req, res, authOptions)) as Session,
    };
  },
  schema,
  // graphiql: {
  //   defaultQuery: `query Session { session { expires user { id email image } } }`,
  // },
  graphqlEndpoint: "/api/graphql",
});
