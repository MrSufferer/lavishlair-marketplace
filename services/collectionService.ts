import {
  Collection,
  CollectionStatsAggregateQuery,
} from '@zoralabs/zdk/dist/queries/queries-sdk'
import { NFTObject, useNFT } from '@zoralabs/nft-hooks'
import { GetServerSideProps } from 'next'
import { useApolloClient } from '@apollo/client';
import CONTRACT_QUERY from '../apollo/graphql/queries/collection.graphql';
import { TokenContract } from '../apollo/__generated__/schema.graphql.types';
import { buildCollectionSEO, SeoProps } from 'utils/seo'
import { allAddresses } from 'constants/collection-addresses'

export type CollectionServiceProps = {
  initialPage: NFTObject[]
  contractAddress: string
  aggregateStats: CollectionStatsAggregateQuery
  collection: TokenContract
  seo: SeoProps
}

type CollectionProps = {
  address: string
}

interface CollectionParamsProps extends GetServerSideProps {
  params?: CollectionProps
}

export async function collectionService({ params }: CollectionParamsProps) {
  const tokenAddress = params
    ? params.address.toLowerCase()
    : process.env.NEXT_PUBLIC_DEFAULT_CONTRACT

  if (!tokenAddress) return false

  if (tokenAddress && !allAddresses.includes(tokenAddress)) {
    return {
      notFound: true,
    }
  }

  // const {data, error} = await useNFT(tokenAddress)

  try {

    const result =
      await fetch(process.env.NEXT_PUBLIC_NFT_GRAPHQL_URI || "https://api.thegraph.com/subgraphs/name/digitalnativeinc/rinkeby-erc721", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query:`
              query collection($address: ID!) {
                tokenContract(id: $address) {
                    id,
                    name,
                    symbol,
                    supportsEIP721Metadata,
                    numTokens,
                    numOwners
                }
            }
            `,
              variables: { 
                address: tokenAddress
              },
          })
      })
      .then((res) => res.json())
    
    if (!result.data.tokenContract) {
      return {
        notFound: true
      }
    }

    const { tokenContract } = result.data

    const { name, symbol } = tokenContract
    tokenContract.address = tokenAddress

    const seo = await buildCollectionSEO(name, symbol)

    return {
      props: {
        contractAddress: tokenAddress,
        seo,
        collection: tokenContract
      },
    }
  } catch (err) {
    if (err instanceof Error) {
      if (err?.message.includes('404')) {
        return {
          notFound: true,
          revalidate: 60,
        }
      }
      console.warn(err.message)
    }
    throw err
  }
}
