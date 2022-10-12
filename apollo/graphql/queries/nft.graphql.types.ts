import * as Types from '../../__generated__/schema.graphql.types';

export type NftQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type NftQuery = { __typename?: 'Query', token?: { __typename?: 'Token', id: string, tokenURI: string, tokenID: any, owner: { __typename?: 'Owner', id: string }, contract: { __typename?: 'TokenContract', id: string, name?: string | null } } | null };
