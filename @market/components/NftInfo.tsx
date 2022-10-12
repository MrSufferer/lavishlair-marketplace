import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import NFT_QUERY from '../../apollo/graphql/queries/nft.graphql'
import { Flex, Stack } from '@zoralabs/zord'
import { FillV3AskInfo, ModalTitleAndDescription } from '@market/components'
import { useAuth, useTitleWithFallback } from '@shared'
import { CollectionThumbnail } from '@media/CollectionThumbnail'

export enum MODAL_TYPES {
  list = 'list',
  fillAsk = 'fillAsk',
  auction = 'auction',
}

export function NftInfo({
  collectionAddress,
  tokenId,
  askPrice,
  modalType,
}: {
  collectionAddress: string | undefined
  tokenId: string | undefined
  askPrice?: string
  /** Additional NFT info to display based on use context */
  modalType?: 'fillAsk' | 'list' | 'auction'
}) {
  const { data, error, loading } = useQuery(NFT_QUERY, { variables: { id: `${collectionAddress}_${tokenId}`} })
  const { address } = useAuth()

  if (!collectionAddress || !tokenId || loading) return null

  const { fallbackTitle } = useTitleWithFallback(collectionAddress, tokenId)

  const noWallet = useMemo(() => {
    return address === null ? true : false
  }, [address])

  return (
    <Stack gap="x4">
      <Flex justify="space-between" align="flex-start">
        <ModalTitleAndDescription
          title={
            noWallet
              ? 'Connect your Wallet'
              : `${
                  modalType === MODAL_TYPES.fillAsk
                    ? 'Buy'
                    : modalType === MODAL_TYPES.list
                    ? 'List'
                    : MODAL_TYPES.auction
                    ? 'Bid on'
                    : ''
                } ${data && data.token?.contract ? `${data.token.contract.name}_${data.token.tokenID}` : fallbackTitle}`
          }
        />
        <CollectionThumbnail collectionAddress={collectionAddress} tokenId={tokenId} />
      </Flex>
      {data && modalType === 'fillAsk' && askPrice && (
        <FillV3AskInfo nft={data.token} askPrice={askPrice} />
      )}
    </Stack>
  )
}
