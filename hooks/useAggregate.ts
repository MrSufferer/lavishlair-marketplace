import { useEffect, useState } from 'react'
import { zdk } from '@shared'
import useSWR from 'swr'
import { NetworkInput } from 'utils/network'
import { CollectionStatsAggregateQuery } from '@zoralabs/zdk/dist/queries/queries-sdk'

export const useAggregate = (collectionAddress: string) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(undefined)
    const [data, setData] = useState<any | undefined>(undefined)
  
    useEffect(() => {
      const fetchCollectionAggregate = async () => {
        try {
          setLoading(true)
          /* @ts-ignore */
          console.log("start asks history query")
          const result =
            await fetch(process.env.NEXT_PUBLIC_MARKET_GRAPHQL_URI || "https://api.thegraph.com/subgraphs/name/digitalnativeinc/rinkeby-erc721", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query:`
                        query CollectionAggregate($contract: String!) {
                          collectionAggregate(id: $contract) {
                                id,
                                totalVolume,
                                totalListed,
                                floorPrice,
                                averageSale24H,
                                usdcVolume,
                                isBoosted
                            }
                        }
                    `,
                    variables: {
                        contract: collectionAddress
                    }
                })
            })
            .then((res) => res.json())

          setData(result.data)
          setLoading(false)
        } catch (error) {
          setError(error)
          setLoading(false)
        }
      }
      fetchCollectionAggregate()
    }, [collectionAddress])

  return {
    data,
    error,
    loading
  }
}
