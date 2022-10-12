import { Grid, Stack, GridProps } from '@zoralabs/zord'
import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { NFTGridLoadMore } from './NFTGridLoadMore'
import { nftGridWrapper } from '../NftMedia.css'
import { NFTProvider } from '@shared'

export interface NFTGridProps extends GridProps {
  items: Token[]
  isValidating: boolean
  isReachingEnd: boolean | undefined
  handleLoadMore?: () => void
  nftRenderer: JSX.Element
}

export function NFTGrid({
  items,
  isValidating,
  isReachingEnd,
  handleLoadMore,
  nftRenderer,
  ...props
}: NFTGridProps) {
  return (
    <>
      <Stack gap="x14" pb="x10">
        <Grid {...props}>
          {items.map((nft) => (
            <NFTProvider
              key={`${nft?.contract.id}-${nft?.tokenID}`}
              contractAddress={nft?.contract.id}
              tokenId={nft?.tokenID}
              initialData={nft}
            >
              {nftRenderer}
            </NFTProvider>
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
