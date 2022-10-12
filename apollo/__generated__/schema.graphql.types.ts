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
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type All = {
  __typename?: 'All';
  id: Scalars['ID'];
  numOwners: Scalars['BigInt'];
  numTokenContracts: Scalars['BigInt'];
  numTokens: Scalars['BigInt'];
};

export type All_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numOwners?: InputMaybe<Scalars['BigInt']>;
  numOwners_gt?: InputMaybe<Scalars['BigInt']>;
  numOwners_gte?: InputMaybe<Scalars['BigInt']>;
  numOwners_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numOwners_lt?: InputMaybe<Scalars['BigInt']>;
  numOwners_lte?: InputMaybe<Scalars['BigInt']>;
  numOwners_not?: InputMaybe<Scalars['BigInt']>;
  numOwners_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numTokenContracts?: InputMaybe<Scalars['BigInt']>;
  numTokenContracts_gt?: InputMaybe<Scalars['BigInt']>;
  numTokenContracts_gte?: InputMaybe<Scalars['BigInt']>;
  numTokenContracts_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numTokenContracts_lt?: InputMaybe<Scalars['BigInt']>;
  numTokenContracts_lte?: InputMaybe<Scalars['BigInt']>;
  numTokenContracts_not?: InputMaybe<Scalars['BigInt']>;
  numTokenContracts_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numTokens?: InputMaybe<Scalars['BigInt']>;
  numTokens_gt?: InputMaybe<Scalars['BigInt']>;
  numTokens_gte?: InputMaybe<Scalars['BigInt']>;
  numTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numTokens_lt?: InputMaybe<Scalars['BigInt']>;
  numTokens_lte?: InputMaybe<Scalars['BigInt']>;
  numTokens_not?: InputMaybe<Scalars['BigInt']>;
  numTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum All_OrderBy {
  Id = 'id',
  NumOwners = 'numOwners',
  NumTokenContracts = 'numTokenContracts',
  NumTokens = 'numTokens'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Owner = {
  __typename?: 'Owner';
  id: Scalars['ID'];
  numTokens: Scalars['BigInt'];
  tokens: Array<Token>;
};


export type OwnerTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Token_Filter>;
};

export type OwnerPerTokenContract = {
  __typename?: 'OwnerPerTokenContract';
  contract: TokenContract;
  id: Scalars['ID'];
  numTokens: Scalars['BigInt'];
  owner: Owner;
};

export type OwnerPerTokenContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<TokenContract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numTokens?: InputMaybe<Scalars['BigInt']>;
  numTokens_gt?: InputMaybe<Scalars['BigInt']>;
  numTokens_gte?: InputMaybe<Scalars['BigInt']>;
  numTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numTokens_lt?: InputMaybe<Scalars['BigInt']>;
  numTokens_lte?: InputMaybe<Scalars['BigInt']>;
  numTokens_not?: InputMaybe<Scalars['BigInt']>;
  numTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Owner_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum OwnerPerTokenContract_OrderBy {
  Contract = 'contract',
  Id = 'id',
  NumTokens = 'numTokens',
  Owner = 'owner'
}

export type Owner_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numTokens?: InputMaybe<Scalars['BigInt']>;
  numTokens_gt?: InputMaybe<Scalars['BigInt']>;
  numTokens_gte?: InputMaybe<Scalars['BigInt']>;
  numTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numTokens_lt?: InputMaybe<Scalars['BigInt']>;
  numTokens_lte?: InputMaybe<Scalars['BigInt']>;
  numTokens_not?: InputMaybe<Scalars['BigInt']>;
  numTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens_?: InputMaybe<Token_Filter>;
};

export enum Owner_OrderBy {
  Id = 'id',
  NumTokens = 'numTokens',
  Tokens = 'tokens'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  all?: Maybe<All>;
  alls: Array<All>;
  owner?: Maybe<Owner>;
  ownerPerTokenContract?: Maybe<OwnerPerTokenContract>;
  ownerPerTokenContracts: Array<OwnerPerTokenContract>;
  owners: Array<Owner>;
  token?: Maybe<Token>;
  tokenContract?: Maybe<TokenContract>;
  tokenContracts: Array<TokenContract>;
  tokens: Array<Token>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<All_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<All_Filter>;
};


export type QueryOwnerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnerPerTokenContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnerPerTokenContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnerPerTokenContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnerPerTokenContract_Filter>;
};


export type QueryOwnersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Owner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Owner_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenContract_Filter>;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  all?: Maybe<All>;
  alls: Array<All>;
  owner?: Maybe<Owner>;
  ownerPerTokenContract?: Maybe<OwnerPerTokenContract>;
  ownerPerTokenContracts: Array<OwnerPerTokenContract>;
  owners: Array<Owner>;
  token?: Maybe<Token>;
  tokenContract?: Maybe<TokenContract>;
  tokenContracts: Array<TokenContract>;
  tokens: Array<Token>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<All_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<All_Filter>;
};


export type SubscriptionOwnerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnerPerTokenContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnerPerTokenContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnerPerTokenContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnerPerTokenContract_Filter>;
};


export type SubscriptionOwnersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Owner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Owner_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenContract_Filter>;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Token = {
  __typename?: 'Token';
  contract: TokenContract;
  id: Scalars['ID'];
  mintTime: Scalars['BigInt'];
  owner: Owner;
  tokenID: Scalars['BigInt'];
  tokenURI: Scalars['String'];
};

export type TokenContract = {
  __typename?: 'TokenContract';
  doAllAddressesOwnTheirIdByDefault: Scalars['Boolean'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  numOwners: Scalars['BigInt'];
  numTokens: Scalars['BigInt'];
  supportsEIP721Metadata: Scalars['Boolean'];
  symbol?: Maybe<Scalars['String']>;
  tokens: Array<Token>;
};


export type TokenContractTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Token_Filter>;
};

export type TokenContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  doAllAddressesOwnTheirIdByDefault?: InputMaybe<Scalars['Boolean']>;
  doAllAddressesOwnTheirIdByDefault_in?: InputMaybe<Array<Scalars['Boolean']>>;
  doAllAddressesOwnTheirIdByDefault_not?: InputMaybe<Scalars['Boolean']>;
  doAllAddressesOwnTheirIdByDefault_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  numOwners?: InputMaybe<Scalars['BigInt']>;
  numOwners_gt?: InputMaybe<Scalars['BigInt']>;
  numOwners_gte?: InputMaybe<Scalars['BigInt']>;
  numOwners_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numOwners_lt?: InputMaybe<Scalars['BigInt']>;
  numOwners_lte?: InputMaybe<Scalars['BigInt']>;
  numOwners_not?: InputMaybe<Scalars['BigInt']>;
  numOwners_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numTokens?: InputMaybe<Scalars['BigInt']>;
  numTokens_gt?: InputMaybe<Scalars['BigInt']>;
  numTokens_gte?: InputMaybe<Scalars['BigInt']>;
  numTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numTokens_lt?: InputMaybe<Scalars['BigInt']>;
  numTokens_lte?: InputMaybe<Scalars['BigInt']>;
  numTokens_not?: InputMaybe<Scalars['BigInt']>;
  numTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supportsEIP721Metadata?: InputMaybe<Scalars['Boolean']>;
  supportsEIP721Metadata_in?: InputMaybe<Array<Scalars['Boolean']>>;
  supportsEIP721Metadata_not?: InputMaybe<Scalars['Boolean']>;
  supportsEIP721Metadata_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokens_?: InputMaybe<Token_Filter>;
};

export enum TokenContract_OrderBy {
  DoAllAddressesOwnTheirIdByDefault = 'doAllAddressesOwnTheirIdByDefault',
  Id = 'id',
  Name = 'name',
  NumOwners = 'numOwners',
  NumTokens = 'numTokens',
  SupportsEip721Metadata = 'supportsEIP721Metadata',
  Symbol = 'symbol',
  Tokens = 'tokens'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<TokenContract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mintTime?: InputMaybe<Scalars['BigInt']>;
  mintTime_gt?: InputMaybe<Scalars['BigInt']>;
  mintTime_gte?: InputMaybe<Scalars['BigInt']>;
  mintTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintTime_lt?: InputMaybe<Scalars['BigInt']>;
  mintTime_lte?: InputMaybe<Scalars['BigInt']>;
  mintTime_not?: InputMaybe<Scalars['BigInt']>;
  mintTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Owner_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenID?: InputMaybe<Scalars['BigInt']>;
  tokenID_gt?: InputMaybe<Scalars['BigInt']>;
  tokenID_gte?: InputMaybe<Scalars['BigInt']>;
  tokenID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenID_lt?: InputMaybe<Scalars['BigInt']>;
  tokenID_lte?: InputMaybe<Scalars['BigInt']>;
  tokenID_not?: InputMaybe<Scalars['BigInt']>;
  tokenID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Token_OrderBy {
  Contract = 'contract',
  Id = 'id',
  MintTime = 'mintTime',
  Owner = 'owner',
  TokenId = 'tokenID',
  TokenUri = 'tokenURI'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}
