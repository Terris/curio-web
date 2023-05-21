import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/types/": {
      preset: "client",
      plugins: ["typescript-resolvers"],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
