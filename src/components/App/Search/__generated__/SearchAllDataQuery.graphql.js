/**
 * @flow
 * @relayHash 529a37cb8ba048e593579d081485b520
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SearchAllDataQueryResponse = {|
  +search: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +name?: ?string;
        +login?: string;
        +location?: ?string;
        +avatarUrl?: any;
      |};
    |}>;
  |};
|};
*/


/*
query SearchAllDataQuery(
  $name: String!
) {
  search(query: $name, type: USER, first: 20) {
    edges {
      node {
        __typename
        ... on User {
          name
          login
          location
          avatarUrl
        }
        ... on Node {
          id
        }
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchAllDataQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 20,
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "query",
            "variableName": "name",
            "type": "String!"
          },
          {
            "kind": "Literal",
            "name": "type",
            "value": "USER",
            "type": "SearchType!"
          }
        ],
        "concreteType": "SearchResultItemConnection",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": null,
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "type": "User",
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "login",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "location",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "avatarUrl",
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SearchAllDataQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SearchAllDataQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 20,
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "query",
            "variableName": "name",
            "type": "String!"
          },
          {
            "kind": "Literal",
            "name": "type",
            "value": "USER",
            "type": "SearchType!"
          }
        ],
        "concreteType": "SearchResultItemConnection",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": null,
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "User",
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "login",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "location",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "avatarUrl",
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query SearchAllDataQuery(\n  $name: String!\n) {\n  search(query: $name, type: USER, first: 20) {\n    edges {\n      node {\n        __typename\n        ... on User {\n          name\n          login\n          location\n          avatarUrl\n        }\n        ... on Node {\n          id\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
