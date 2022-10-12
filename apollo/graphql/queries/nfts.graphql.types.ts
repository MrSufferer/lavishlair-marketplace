import * as Types from '../../__generated__/schema.graphql.types';

export type NftsQueryVariables = Types.Exact<{
  contractId: Types.Scalars['String'];
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  after: Types.Scalars['ID'];
}>;


export type NftsQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'Token', id: string, tokenURI: string, tokenID: any, owner: { __typename?: 'Owner', id: string } }> };
