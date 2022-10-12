import { Box, Flex, Label, BoxProps } from '@zoralabs/zord'
import { nftThumbnail } from './NftMedia.css'
import { useNFT } from '@zoralabs/nft-hooks'
import { useTokenDetails } from './hooks/useTokenDetails'
import { ImageWithNounFallback } from 'components'
import { useQuery } from '@apollo/client'
import NFT_QUERY from '../apollo/graphql/queries/nft.graphql'
import { useEffect, useMemo } from 'react'

export type SizeProps = '100%' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | undefined

export const returnThumbnailSize = (size: SizeProps) => {
  switch (size) {
    case '100%':
      return '100%'
    case 'xxs':
      return 'x8'
    case 'xs':
      return 'x10'
    case 'sm':
      return 'x14'
    case 'md':
      return 'x20'
    case 'lg':
      return 'x24'
    default:
      return '100%'
  }
}

export interface CollectionThumbnailProps extends BoxProps {
  collectionAddress: string | undefined
  tokenId?: string
  tokenURI?: string
  size?: SizeProps
  radius?: 'curved' | 'round' | 'phat'
  useTitle?: boolean
  thumbnailStyle?: any
}

export function CollectionThumbnail({
  collectionAddress,
  tokenId = '1',
  tokenURI = '',
  size = 'md',
  radius = 'curved',
  useTitle = false,
  thumbnailStyle,
  ...props
}: CollectionThumbnailProps) {
  // const image = useTokenImage({id: tokenId, tokenURI })

  const { data, error, loading } = useQuery(
      NFT_QUERY, {
      variables: {
        id: `${collectionAddress}_${tokenId}`.toLowerCase()
      }
  })
  
  const { name, image } = useTokenDetails({ tokenURI: data?.token?.tokenURI })

  if (!collectionAddress || loading ) return null

  return (
    <Flex align="center" gap="x4" {...props}>
      <Box
        h={returnThumbnailSize(size)}
        borderRadius={radius}
        className={['zora-media__nft-thumbnail', nftThumbnail]}
      >
        <ImageWithNounFallback
          srcImg={image}
          tokenId={tokenId}
          tokenContract={collectionAddress}
        />
      </Box>
      {useTitle && <Label size="lg">{name}</Label>}
    </Flex>
  )
}
