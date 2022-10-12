import { Grid, Stack, Heading, Label, Icon, Flex } from '@zoralabs/zord'
import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { NFTGridLoadMore } from '@media/NFTGrid/NFTGridLoadMore'
import { nftGridWrapper } from '@media/NftMedia.css'
import { RawDisplayer } from './RawDisplayer'
import { Link } from 'components/Link'

export type NFTGridProps = {
  items: Token[]
  isValidating: boolean
  isReachingEnd: boolean | undefined
  handleLoadMore?: () => void
}

export function NFTGridTestData({
  items,
  isValidating,
  isReachingEnd,
  handleLoadMore,
}: NFTGridProps) {
  return (
    <>
      <Stack gap="x14" pb="x10">
        <Grid gap="x4" className={nftGridWrapper}>
          {items.map((nft) => (
            <Stack
              w="100%"
              overflowX="scroll"
              key={`${nft?.contract.id}-${nft?.tokenID}`}
            >
              <Stack>
                <Link
                  href={`/test/collections/${nft?.contract.id}/${nft?.tokenID}`}
                >
                  <Label>
                    {nft?.contract.name}: {nft?.tokenID}
                  </Label>
                  <Flex align="center" justify="space-between">
                    <Heading size="xs">
                      NAME: {nft.contract?.name ? (nft.contract?.name + nft?.tokenID) : 'undefined'}
                    </Heading>
                    <Icon size="md" id="ArrowRight" />
                  </Flex>
                </Link>
              </Stack>
              <RawDisplayer data={nft} />
            </Stack>
          ))}
        </Grid>
      </Stack>
      {!isReachingEnd && (
        <NFTGridLoadMore
          showObserver={true}
          isValidating={isValidating}
          handleLoadMore={handleLoadMore}
        />
      )}
    </>
  )
}
