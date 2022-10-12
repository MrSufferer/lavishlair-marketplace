import * as Types from '../../__generated__/schema.graphql.types';

export type CollectionQueryVariables = Types.Exact<{
  address: Types.Scalars['ID'];
}>;


export type CollectionQuery = { __typename?: 'Query', tokenContract?: { __typename?: 'TokenContract', id: string, name?: string | null, symbol?: string | null, supportsEIP721Metadata: boolean, numTokens: any, numOwners: any } | null };
