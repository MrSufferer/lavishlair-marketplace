
import { useEffect, useState } from 'react'

export const useAskHistory = (collectionAddress: string, tokenId: any) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(undefined)
    const [data, setData] = useState<any | undefined>(undefined)
  
    useEffect(() => {
      const fetchAsksHistory = async () => {
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
                        query Asks($tokenID: BigInt!, $contract: String!) {
                            asks(orderDirection: desc, orderBy: createdAt, where: { tokenID: $tokenID, tokenContract: $contract }) {
                                id,
                                askType,
                                tokenContract,
                                tokenID,
                                seller,
                                sellerFundsRecipient,
                                askCurrency,
                                askPrice,
                                findersFeeBps,
                                createdAt,
                                buyer
                            }
                        }
                    `,
                    variables: { 
                        tokenID: tokenId,
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
      fetchAsksHistory()
    }, [collectionAddress])

  return {
    data,
    error,
    loading
  }
}