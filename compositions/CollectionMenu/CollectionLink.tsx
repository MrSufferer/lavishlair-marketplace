import { Flex, Stack, Label, Eyebrow, Icon } from '@zoralabs/zord'
import { useModal } from '@modal'
import { Link } from 'components/Link'
import { CollectionThumbnail } from '@media/CollectionThumbnail'
import { lightGreyType, leadingTight } from 'styles/styles.css'
import { useAggregate, CollectionsData } from 'hooks'
import { utils } from 'ethers'

import { lightFont } from '@shared'

export function CollectionLink({ collection }: { collection: CollectionsData }) {
  const { requestClose } = useModal()
  const { data, loading } = useAggregate(collection.id)

  return (
    <Link href={`/collections/${collection.id}`}>
      <Flex align="center" justify="space-between" gap="x4" onClick={requestClose}>
        <Flex align="center" gap="x4">
          <CollectionThumbnail collectionAddress={collection.id} />
          <Stack>
            <Label size="lg" className={leadingTight}>
              {collection.name}
            </Label>
            {data?.collectionAggregate?.floorPrice !== null && (
              <Eyebrow className={[lightGreyType, lightFont]}>
                Floor Price: {utils.formatEther(data?.collectionAggregate?.floorPrice)} ETH
              </Eyebrow>
            )}
          </Stack>
        </Flex>
        <Flex gap="x2" align="center">
          <Label color="tertiary" className={[lightFont]}>
            {collection.numTokens} NFTs
          </Label>
          <Icon id="ChevronRight" color="tertiary" />
        </Flex>
      </Flex>
    </Link>
  )
}
