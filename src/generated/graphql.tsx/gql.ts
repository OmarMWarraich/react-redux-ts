/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n    query LaunchList {\n        launches {\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n": types.LaunchListDocument,
    "\n    query LaunchProfile($id: String!) {\n        launch(id: $id) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            details\n            launch_site {\n                site_name_long\n            }\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n            links {\n                mission_patch_small\n                flickr_images\n            }\n        }\n    }\n": types.LaunchProfileDocument,
};

export function graphql(source: "\n    query LaunchList {\n        launches {\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"): (typeof documents)["\n    query LaunchList {\n        launches {\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"];
export function graphql(source: "\n    query LaunchProfile($id: String!) {\n        launch(id: $id) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            details\n            launch_site {\n                site_name_long\n            }\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n            links {\n                mission_patch_small\n                flickr_images\n            }\n        }\n    }\n"): (typeof documents)["\n    query LaunchProfile($id: String!) {\n        launch(id: $id) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            details\n            launch_site {\n                site_name_long\n            }\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n            links {\n                mission_patch_small\n                flickr_images\n            }\n        }\n    }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;