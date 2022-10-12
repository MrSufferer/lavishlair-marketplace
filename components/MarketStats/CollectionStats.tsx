import { StatBlock } from './StatBlock'
import { useAggregate } from 'hooks'
import { roundFourDecimals, roundTwoDecimals, numberFormatter } from '@shared'
import { utils } from 'ethers'

export function CollectionStats({ contractAddress }: { contractAddress: string }) {
  const { data } = useAggregate(contractAddress)

  if (!data || !data.collectionAggregate) return null

  const volume =
    `${numberFormatter(
      utils.formatEther(data.collectionAggregate?.totalVolume)
    )} ETH` ?? '...'

  const usdcPrice =
    `$${numberFormatter(
      utils.formatEther(data.collectionAggregate?.usdcVolume)
    )}` ?? '...'

  const isBoosted = data.collectionAggregate?.isBoosted 
  const boostingPercent = isBoosted ? '1%' : '0%'

  return (
    <>
      <StatBlock statType="Volume" statValue={volume} />
      <StatBlock statType="USDC Volume" statValue={usdcPrice} />
      { isBoosted && <StatBlock statType="Boosting Reward" statValue={boostingPercent} statColor="success" /> }
    </>
  )
}
