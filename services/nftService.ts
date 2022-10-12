import { GetServerSideProps } from 'next'
import { assert } from 'console'
import { ZDKFetchStrategy } from '@zoralabs/nft-hooks/dist/strategies'
import { prepareJson } from '@zoralabs/nft-hooks/dist/fetcher/NextUtils'
import { GALACTUS_BASE_URL } from 'utils/env-vars'

const zdkFetchStrategy = new ZDKFetchStrategy('1', GALACTUS_BASE_URL)

export type NFTProps = {
  address: string
  tokenId: string
}

export interface NFTParamsProps extends GetServerSideProps<NFTProps> {
  params: NFTProps
}

export async function nftService({ params }: NFTParamsProps) {
  assert(params, 'Page template must provide a params object')

  const tokenAddress = params ? params.address : undefined
  const tokenId = params ? params.tokenId : undefined

  if (!tokenAddress || !tokenId) return false

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
                query nft($id: ID!) {
                  token(id: $id) {
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
                id: `${tokenAddress}_${tokenId}`.toLowerCase()
              },
          })
      })
      .then((res) => res.json())

    if (!result.data) return false
    
    return {
      props: {
        nft: result.data.token,
        tokenAddress: tokenAddress,
        tokenId: tokenId,
      },
    }
  } catch (err) {
    return {
      props: {
        nft: undefined,
        tokenAddress: tokenAddress,
        tokenId: tokenId,
      },
    }
  }
}
