import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { Box, FlexProps, Stack, Button } from '@zoralabs/zord'
import { ModalComposition, useModal } from '@modal'
import { useIsOwner } from '@shared'
import { ListV3AskWizard, NFTOwner } from '@market/components'

export interface ListV3AskModalProps extends FlexProps {
  nftData: Token
}

const tickImg = "https://www.nicepng.com/png/full/362-3624869_icon-success-circle-green-tick-png.png"

export function ListV3AskModal({ nftData, ...props }: ListV3AskModalProps) {
  const { isOwner } = useIsOwner(nftData)
  const { requestClose } = useModal()

  // if (!nft) {
  //   return null
  // }

  return (
    <Stack {...props} flex="1" justify="flex-end">
      {isOwner ? (
        <ModalComposition
          modalName={`list-${nftData.tokenID}${nftData.contract.id}`}
          trigger={
            <Button
              as="span"
              size="md"
              borderRadius="curved"
              className="zora-market-cardMarketTrigger"
            >
              List
            </Button>
          }
          content={
            <Box p="x8" {...props}>
              <ListV3AskWizard
                tokenAddress={nftData.contract.id}
                tokenId={nftData.tokenID}
                onClose={requestClose}
                previewURL={tickImg}
                cancelButton={
                  <Button
                    onClick={requestClose}
                    w="100%"
                    variant="secondary"
                    borderRadius="curved"
                  >
                    Cancel
                  </Button>
                }
              />
            </Box>
          }
        />
      ) : (
        <NFTOwner address={nftData?.owner?.id} align="left" />
      )}
    </Stack>
  )
}
