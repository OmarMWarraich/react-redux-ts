/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n    query LaunchListQuery {\n        launches {\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n": types.LaunchListQueryDocument,
};

export function graphql(source: "\n    query LaunchListQuery {\n        launches {\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"): (typeof documents)["\n    query LaunchListQuery {\n        launches {\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;