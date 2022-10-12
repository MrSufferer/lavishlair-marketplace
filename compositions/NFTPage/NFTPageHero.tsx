import { Box, BoxProps } from '@zoralabs/zord'
import { cardImageWrapper } from '@media/NftMedia.css'
import { nftPageHero } from './NFTPage.css'
import { useTokenDetails } from '@media/hooks/useTokenDetails'
import { useNFTProvider } from '@shared/providers/NFTProvider'
import { ImageWithNounFallback } from 'components'

export interface NFTPageHeroProps extends BoxProps {}

export function NFTPageHero({ ...props }: NFTPageHeroProps) {
  const { initialData: nft, tokenId, contractAddress } = useNFTProvider()
  const { name, image } = useTokenDetails({tokenURI: nft?.tokenURI})

  return (
    <Box
      w="100%"
      className={[cardImageWrapper, nftPageHero]}
      backgroundColor="tertiary"
      overflow="hidden"
      {...props}
    >
      {contractAddress && tokenId && (
        <ImageWithNounFallback
          tokenContract={contractAddress}
          tokenId={tokenId}
          srcImg={image}
        />
      )}
    </Box>
  )
}
