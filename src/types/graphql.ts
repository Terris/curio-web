/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type Chat = {
  __typename?: 'Chat';
  chatMessages?: Maybe<Array<Maybe<ChatMessage>>>;
  id: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type ChatCompletion = {
  __typename?: 'ChatCompletion';
  id: Scalars['String'];
  message: ChatCompletionMessage;
};

export type ChatCompletionInput = {
  messages?: InputMaybe<Array<ChatCompletionMessageInput>>;
};

export type ChatCompletionMessage = {
  __typename?: 'ChatCompletionMessage';
  content: Scalars['String'];
  role: Scalars['String'];
};

export type ChatCompletionMessageInput = {
  content: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  chat: Chat;
  chatId: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type Note = {
  __typename?: 'Note';
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  chat?: Maybe<Chat>;
  chatCompletion?: Maybe<ChatCompletion>;
  chats?: Maybe<Array<Maybe<Chat>>>;
  notes?: Maybe<Array<Maybe<Note>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  usersChats?: Maybe<Array<Maybe<Chat>>>;
  usersNotes?: Maybe<Array<Maybe<Note>>>;
};


export type QueryChatArgs = {
  id: Scalars['String'];
};


export type QueryChatCompletionArgs = {
  input: ChatCompletionInput;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersChatsArgs = {
  userId: Scalars['String'];
};


export type QueryUsersNotesArgs = {
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  chats?: Maybe<Array<Maybe<Chat>>>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  notes?: Maybe<Array<Maybe<Note>>>;
};

export type NotesFieldsFragment = { __typename?: 'Note', id: string, title: string, content?: string | null, userId: string } & { ' $fragmentName'?: 'NotesFieldsFragment' };

export type NotesQueryVariables = Exact<{ [key: string]: never; }>;


export type NotesQuery = { __typename?: 'Query', notes?: Array<(
    { __typename?: 'Note' }
    & { ' $fragmentRefs'?: { 'NotesFieldsFragment': NotesFieldsFragment } }
  ) | null> | null };

export type UserFieldsFragment = { __typename?: 'User', id: string, email?: string | null, isAdmin: boolean } & { ' $fragmentName'?: 'UserFieldsFragment' };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<(
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
  ) | null> | null };

export type ChatCompletionFieldsFragment = { __typename?: 'ChatCompletion', id: string, message: { __typename?: 'ChatCompletionMessage', role: string, content: string } } & { ' $fragmentName'?: 'ChatCompletionFieldsFragment' };

export type ChatCompletionQueryVariables = Exact<{
  input: ChatCompletionInput;
}>;


export type ChatCompletionQuery = { __typename?: 'Query', chatCompletion?: (
    { __typename?: 'ChatCompletion' }
    & { ' $fragmentRefs'?: { 'ChatCompletionFieldsFragment': ChatCompletionFieldsFragment } }
  ) | null };

export const NotesFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotesFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<NotesFieldsFragment, unknown>;
export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const ChatCompletionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatCompletionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChatCompletion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<ChatCompletionFieldsFragment, unknown>;
export const NotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotesFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotesFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<NotesQuery, NotesQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const ChatCompletionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChatCompletion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatCompletionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatCompletion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatCompletionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatCompletionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChatCompletion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<ChatCompletionQuery, ChatCompletionQueryVariables>;