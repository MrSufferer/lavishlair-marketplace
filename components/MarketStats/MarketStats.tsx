import { Flex, FlexProps, Box } from '@zoralabs/zord'
import { marketStatsWrapper } from 'styles/styles.css'
import { numberFormatter } from '@shared'
import { useAggregate } from 'hooks'
import { utils } from 'ethers'
import { StatBlock } from './StatBlock'
import { CollectionStats } from './CollectionStats'
import { DaoStats } from './DaoStats'
import { returnDao } from 'constants/collection-addresses'
import { TokenContract } from 'apollo/__generated__/schema.graphql.types'

export interface MarketStatesProps extends FlexProps {
  contractAddress: string,
  collection: TokenContract
}

export function MarketStats({ contractAddress, collection, ...props }: MarketStatesProps) {
  const { data, loading } = useAggregate(contractAddress)
  const dao = returnDao(contractAddress)

  if (loading || !data) return null

  const ownerCount = numberFormatter(collection.numOwners)
  const nftCount = numberFormatter(collection.numTokens)
  const floorPrice = utils.formatEther(data.collectionAggregate?.floorPrice ?? '0')

  return (
    <Flex className={marketStatsWrapper} {...props}>
      <Flex
        gap="x4"
        w="100%"
        justify={{
          '@initial': 'flex-start',
          '@1024': 'center',
        }}
      >
        <StatBlock statType="Owners" statValue={collection.numOwners} />
        <StatBlock statType="Items" statValue={collection.numTokens} />
        <StatBlock statType="Floor Price" statValue={`${floorPrice} ETH`} />
        {dao ? (
          <DaoStats contractAddress={contractAddress} />
        ) : (
          <CollectionStats contractAddress={contractAddress} />
        )}
        <Box
          style={{ paddingLeft: '1px' }}
          h="100%"
          position="relative"
          display={{
            '@initial': 'block',
            '@1024': 'none',
          }}
        />
      </Flex>
    </Flex>
  )
}
