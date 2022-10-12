import { NounishAuction } from '@noun-auction'
import { useNFTProvider } from '@shared'
import { returnDao } from 'constants/collection-addresses'
import { useWindowWidth } from '@shared'

export function NounishActivityRow() {
  const {
    initialData,
    contractAddress,
    tokenId,
  } = useNFTProvider()

  if (!initialData || !contractAddress || !tokenId) return null

  const dao = returnDao(contractAddress)

  if (!dao) return null

  return (
    <NounishAuction
      key={`${contractAddress}`}
      daoConfig={dao}
      showLabels
      hideCollectionTitle={false}
      borderRadius="curved"
      borderColor="tertiary"
      tokenId={tokenId}
      p="x4"
    />
  )
}
