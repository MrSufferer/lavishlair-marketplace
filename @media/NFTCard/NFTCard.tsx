import { useMemo } from 'react'
import { Stack, Box, Flex, Heading, Separator } from '@zoralabs/zord'
import { Link } from 'components/Link'
import { NFTCardMarket } from '@market'
import {
  cardWrapper,
  titleWrapper,
  titleScroll,
  titleHeading,
  cardImageWrapper,
} from '@media/NftMedia.css'
import { CollectionThumbnail } from '@media/CollectionThumbnail'
import { ImageWithNounFallback } from 'components'
import { useNFTProvider, useTitleWithFallback } from '@shared'
import { useTokenDetails } from '@media/hooks/useTokenDetails'
import NFT_QUERY from '../../apollo/graphql/queries/nft.graphql'
import { useQuery } from '@apollo/client'

export function NFTCard() {
  const {
    contractAddress,
    tokenId
  } = useNFTProvider()

  const { data, error, loading } = 
    useQuery(NFT_QUERY, 
      { 
        variables: {
          id: `${contractAddress}_${tokenId}`.toLowerCase()
        }
      }
    )

  const { name, image } = useTokenDetails({ tokenURI: data?.token.tokenURI })

  if (!data || !contractAddress || !tokenId || loading || !image || !name) return null

  const fallbackTitle = name

  const useTitleScroll = name.split('').length > 22

  return (
    <Stack w="100%" position="relative" overflow="hidden" className={cardWrapper}>
      <Link href={`/collections/${contractAddress}/${tokenId}`}>
        <Box w="100%" className={cardImageWrapper} backgroundColor="tertiary">
          <ImageWithNounFallback
            tokenContract={contractAddress}
            tokenId={tokenId}
            srcImg={image}
          />
        </Box>
      </Link>
      <Stack gap="x2" mt="x2" px="x4" pb="x4" flex="1">
        <Flex
          className={[titleWrapper]}
          style={{
            /* @ts-ignore */
            '--titlePad': titleScroll ? '40px' : '0px',
          }}
        >
          <Heading as="h4" size="sm" className={titleHeading}>
            {fallbackTitle}
          </Heading>
        </Flex>
        <Flex align="center" gap="x2" justify="space-between">
          <Link href={`/collections/${contractAddress}`}>
            <Flex align="center" gap="x2">
              <CollectionThumbnail
                collectionAddress={contractAddress}
                radius="round"
                size="xs"
              />
              <Heading size="xs">{data?.token.contract.name}</Heading>
            </Flex>
          </Link>
        </Flex>
        <Separator mt="x1" />
        <NFTCardMarket nftData={data?.token} />
      </Stack>
    </Stack>
  )
}
