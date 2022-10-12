import { getAddress } from '@ethersproject/address'
import { zdk } from '@shared/utils/zdk'
import { transformNFTZDK } from '@zoralabs/nft-hooks/dist/backends'
import { prepareJson } from '@zoralabs/nft-hooks/dist/fetcher/NextUtils'
import { Token } from '../../apollo/__generated__/schema.graphql.types'
import TokenQuery from '../../apollo/graphql/queries/nfts.graphql'
import { useQuery } from '@apollo/client'
import {
  TokenSortInput,
  TokensQueryFilter,
  TokensQueryInput,
} from '@zoralabs/zdk/dist/queries/queries-sdk'
import { flatten } from 'lodash'
import { useCallback } from 'react'
import useSWRInfinite from 'swr/infinite'
import { useNFTQuery } from '@zoralabs/nft-hooks'

const PAGE_SIZE = 24

export interface UseTokenQueryProps {
  contractWhiteList?: string[] | undefined
  contractAddress?: string | null
  ownerAddress?: string
  initialData?: Token[]
  sort?: TokenSortInput
  filter?: TokensQueryFilter
  where?: TokensQueryInput
}

type GetNFTReturnType = {
  tokens: Token[]
  nextCursor?: string | null
}

async function getNFTs(args: any): Promise<GetNFTReturnType> {
  const result =
      await fetch(process.env.NEXT_PUBLIC_NFT_GRAPHQL_URI || 
        "https://api.thegraph.com/subgraphs/name/digitalnativeinc/rinkeby-erc721", 
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query:`
                query nfts($contractId: String!, $limit: Int, $after: BigInt) {
                  tokens(first: $limit, orderBy: tokenID, where: { contract: $contractId, tokenID_gt: $after }) {
                    id,
                    tokenURI,
                    tokenID,
                    owner {
                      id
                    },
                    contract {
                      id,
                      name
                    }
                  }
                }
              `,
              variables: {
                contractId: args.contractId.toLowerCase(),
                after: args.after,
                limit: args.limit
              }
          })
      })
      .then((res) => res.json())
  // const tokens = resp.tokens.nodes
  //   /* @ts-ignore */
  //   .map((token) => transformNFTZDK(token, { rawData: token }))
  //   .map(prepareJson)

  const data = result.data

  if (!data) {
    return {
      tokens: [],
      nextCursor: args.nextCursor,
    }
  }
  
  const nextCursor = data?.tokens[(data?.tokens?.length - 1)].tokenID

  return {
    tokens: data?.tokens,
    nextCursor: nextCursor,
  }
}

export function useTokensQuery({
  contractWhiteList,
  contractAddress,
  ownerAddress,
  sort,
  filter,
  where,
}: // initialData,
UseTokenQueryProps) {
  const getKey = (pageIndex: number, previousPageData: GetNFTReturnType) => {
    if (pageIndex > 0 && !previousPageData.nextCursor) return null // reached the end
    return {
      ...(contractAddress && {
        contractId: ownerAddress
          ? contractWhiteList
          : getAddress(contractAddress),
      }),
      // ...(ownerAddress && {
      //   owner: [getAddress(ownerAddress)],
      // }),
      // sort,
      // filter,
      after: previousPageData?.nextCursor || 0, 
      limit: PAGE_SIZE
    }
  }

  const {
    data: resp,
    error,
    setSize,
    size,
    isValidating,
  } = useSWRInfinite<GetNFTReturnType>(getKey, getNFTs, {
    // fallbackData: [initialData],
    refreshInterval: 5000,
  })

  const data = resp?.map((r) => r.tokens)

  const handleLoadMore = useCallback(() => setSize(size + 1), [setSize, size])

  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)
  const isRefreshing = isValidating && data && data.length === size

  return {
    data: flatten(data),
    isValidating,
    isRefreshing,
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    handleLoadMore,
  }
}
