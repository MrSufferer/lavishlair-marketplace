import { PageWrapper, Seo } from 'components'
import { nftService } from 'services/nftService'
import { Token } from '../../../apollo/__generated__/schema.graphql.types'
import {
  NFTPageHero,
  NFTInfoSidebar,
  NFTAttributes,
  NFTHistory,
} from 'compositions/NFTPage'
import { Grid, Stack } from '@zoralabs/zord'
import {
  attributesHistoryWrapper,
  nftPageWrapper,
} from 'compositions/NFTPage/NFTPage.css'
import { NFTProvider } from '@shared/providers/NFTProvider'
import { NounishAuctionProvider } from '@noun-auction'
import { returnDao } from 'constants/collection-addresses'

const NFT = ({
  nft,
  tokenAddress,
  tokenId,
}: {
  nft: Token | undefined
  tokenAddress: string
  tokenId: string
}) => {
  const dao = returnDao(tokenAddress)

  return (
    <PageWrapper direction="column">
      <Seo
        title="Suck"
        description="Suck"
        ogImage={nft?.tokenURI}
      />
      <NFTProvider initialData={nft} contractAddress={tokenAddress} tokenId={tokenId}>
        <Grid className={nftPageWrapper}>
          <NFTPageHero />
          {dao ? (
            <NounishAuctionProvider daoConfig={dao} tokenId={nft?.tokenID}>
              <NFTInfoSidebar />
            </NounishAuctionProvider>
          ) : (
            <NFTInfoSidebar />
          )}
          <Stack className={attributesHistoryWrapper}>
            <NFTHistory />
            <NFTAttributes />
          </Stack>
        </Grid>
      </NFTProvider>
    </PageWrapper>
  )
}

export const getServerSideProps = nftService

export default NFT
