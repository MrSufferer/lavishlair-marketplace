import { useMemo } from 'react'
import { useIsOwner } from '@shared'
import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { useAskHistory } from '@market/hooks'
import { ListV3AskModal, FillV3AskModal } from '@market/components'
import { FlexProps } from '@zoralabs/zord'
import { ErrorFragment } from 'ethers/lib/utils'

export interface NFTCardMarketProps extends FlexProps {
  nftData: Token
}

export function NFTCardMarket({ nftData, ...props }: NFTCardMarketProps) {
  if (!nftData) return null

  console.log(`${nftData.contract.id}_${nftData.tokenID}`)
  const { data, error, loading } = useAskHistory(nftData.contract.id, nftData.tokenID)
  const { isOwner } = useIsOwner(nftData)
  
  if(data?.asks) {
    console.log(data.asks)
  }

  const marketComponent = useMemo(() => {
    
    if (data && data.asks && data.asks.length > 0) {
      const { asks } = data
      if (asks[0].askType !== "Canceled" && asks[0].askType !== "Filled")
        return <FillV3AskModal nftData={nftData} asks={asks} {...props} />
      else if (asks[0].askType === "Filled" && !isOwner)
        return <FillV3AskModal nftData={nftData} asks={asks} {...props} />
      else 
        return <ListV3AskModal nftData={nftData} {...props} />
    } else return <ListV3AskModal nftData={nftData} {...props} />
  }, [data?.asks])

  if (loading || error) return null

  return marketComponent
}
