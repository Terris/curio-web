import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: ["src/**/!(*.generated).{ts,tsx}"],
  generates: {
    "./src/types/resolvers.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        scalars: {
          DateTime: "Date",
          JSON: "{ [key: string]: any }",
        },
      },
    },
    "./src/types/": {
      preset: "client",
      config: {
        scalars: {
          DateTime: "Date",
          JSON: "{ [key: string]: any }",
        },
      },
    },
  },
};

export default config;
