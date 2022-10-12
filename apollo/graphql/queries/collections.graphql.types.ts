import * as Types from '../../__generated__/schema.graphql.types';

export type CollectionsQueryVariables = Types.Exact<{
  containsId?: Types.InputMaybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
}>;


export type CollectionsQuery = { __typename?: 'Query', tokenContracts: Array<{ __typename?: 'TokenContract', id: string, name?: string | null, symbol?: string | null, supportsEIP721Metadata: boolean, numTokens: any, numOwners: any }> };
