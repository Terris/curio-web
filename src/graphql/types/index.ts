import { join } from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typesFiles = loadFilesSync(join(process.cwd(), "**/*.graphql"));

export const typeDefs = mergeTypeDefs(typesFiles);
