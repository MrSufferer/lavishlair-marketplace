import { Text, Box, Flex, Stack, FlexProps, Button } from '@zoralabs/zord'
import { MARKET_INFO_STATUSES } from '@zoralabs/nft-hooks/dist/types/NFTInterface'
import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { lightFont, useIsOwner } from '@shared'
import { ModalComposition, useModal } from '@modal'
import { useRelevantMarket } from '@market/hooks'
import { utils } from 'ethers'
import { FillV3AskWizard, NFTOwner } from '@market/components'

export interface FillV3AskModalProps extends FlexProps {
  nftData: Token, 
  asks: any
}

const previewURL = "https://www.nicepng.com/png/full/362-3624869_icon-success-circle-green-tick-png.png"

export function FillV3AskModal({ nftData, asks, ...props }: FillV3AskModalProps) {

  const { requestClose } = useModal()
  const { isOwner } = useIsOwner(nftData)

  if (!nftData || !nftData.tokenURI || asks[0].askType === "Canceled") {
    return null
  }

  console.log(asks[0].askType)

  return (
    <Stack flex="1">
      {asks[0] && asks[0].askType !== "Filled" ? (
        <Flex
          id="v3-ask-active"
          w="100%"
          justify="space-between"
          align="flex-end"
          gap="x2"
          {...props}
        >
          <Stack>
            <Text variant="heading-xs" className={lightFont} color="tertiary">
              Price
            </Text>
            <Text variant="heading-xs" className={lightFont}>
              {utils.formatEther(asks[0].askPrice)} ETH
            </Text>
          </Stack>
          {!isOwner ? (
            <ModalComposition
              modalName={`buy-${nftData.contract.id}-${nftData.tokenID}`}
              trigger={
                <Button
                  as="span"
                  size="md"
                  borderRadius="curved"
                  className="zora-market-cardMarketTrigger"
                >
                  Buy
                </Button>
              }
              content={
                <Box p="x8">
                  {asks[0].askPrice && (
                    <FillV3AskWizard
                      tokenAddress={nftData.contract.id}
                      tokenId={nftData.tokenID}
                      previewURL={previewURL}
                      tokenName={nftData.tokenID}
                      askCurrency={asks[0].askCurrency}
                      askPrice={asks[0].askPrice}
                      nftData={nftData}
                      onClose={requestClose}
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
                  )}
                </Box>
              }
            />
          ) : (
            <Button
              disabled
              borderRadius="curved"
              size="md"
              variant="outline"
              borderColor="secondary"
              color="tertiary"
            >
              On Sale
            </Button>
          )}
        </Flex>
      ) : (
        <>
          {asks[0] && (
            <>
              {asks[0]?.askType === "Filled" ? (
                <Flex id="v3-ask-complete" justify="space-between" w="100%" {...props}>
                  <Stack>
                    <Text variant="label-lg" className={lightFont} color="tertiary">
                      Sold on Chain for
                    </Text>
                    <Text variant="heading-xs" className={lightFont}>
                      {utils.formatEther(asks[0].askPrice)} ETH
                    </Text>
                  </Stack>
                  <NFTOwner address={asks[0].buyer} />
                </Flex>
              ) : (
                <NFTOwner address={nftData?.owner?.id} align="left" />
              )}
            </>
          )}
        </>
      )}
    </Stack>
  )
}
