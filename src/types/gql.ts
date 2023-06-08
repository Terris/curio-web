/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment NotesFields on Note {\n    id\n    title\n    content\n    userId\n  }\n": types.NotesFieldsFragmentDoc,
    "\n  query Notes {\n    notes {\n      ...NotesFields\n    }\n  }\n": types.NotesDocument,
    "\n  fragment UserFields on User {\n    id\n    email\n    isAdmin\n  }\n": types.UserFieldsFragmentDoc,
    "\n  query Users {\n    users {\n      ...UserFields\n    }\n  }\n": types.UsersDocument,
    "\n  fragment ChatCompletionFields on ChatCompletion {\n    id\n    message {\n      role\n      content\n    }\n  }\n": types.ChatCompletionFieldsFragmentDoc,
    "\n  query ChatCompletion($input: ChatCompletionInput!) {\n    chatCompletion(input: $input) {\n      ...ChatCompletionFields\n    }\n  }\n": types.ChatCompletionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment NotesFields on Note {\n    id\n    title\n    content\n    userId\n  }\n"): (typeof documents)["\n  fragment NotesFields on Note {\n    id\n    title\n    content\n    userId\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Notes {\n    notes {\n      ...NotesFields\n    }\n  }\n"): (typeof documents)["\n  query Notes {\n    notes {\n      ...NotesFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserFields on User {\n    id\n    email\n    isAdmin\n  }\n"): (typeof documents)["\n  fragment UserFields on User {\n    id\n    email\n    isAdmin\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Users {\n    users {\n      ...UserFields\n    }\n  }\n"): (typeof documents)["\n  query Users {\n    users {\n      ...UserFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ChatCompletionFields on ChatCompletion {\n    id\n    message {\n      role\n      content\n    }\n  }\n"): (typeof documents)["\n  fragment ChatCompletionFields on ChatCompletion {\n    id\n    message {\n      role\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ChatCompletion($input: ChatCompletionInput!) {\n    chatCompletion(input: $input) {\n      ...ChatCompletionFields\n    }\n  }\n"): (typeof documents)["\n  query ChatCompletion($input: ChatCompletionInput!) {\n    chatCompletion(input: $input) {\n      ...ChatCompletionFields\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;