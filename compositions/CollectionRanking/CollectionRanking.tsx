import { Stack, Heading } from '@zoralabs/zord'
import { RankingRow } from './RankingRow'
import { useCollectionsContext } from 'providers/CollectionsProvider'
import { rankingWrapper } from './CollectionRanking.css'

import { collectionAddresses } from 'constants/collection-addresses'
import { TokenContract } from '../../apollo/__generated__/schema.graphql.types';
import { useQuery } from '@apollo/client';

import QUERY from '../../apollo/graphql/queries/collections.graphql';
import { CollectionsQuery } from '../../apollo/graphql/queries/collections.graphql.types';

export const statRows = ['Volume', 'Items', 'Floor', 'Owners']

export function CollectionRanking() {
  const { collections } = useCollectionsContext()
  const { data, error, loading } = useQuery<CollectionsQuery>(QUERY, {
    variables: { containsId: collectionAddresses }
  })

  console.log(data)
  console.log(error)
  console.log(loading)
  return (
    <Stack className={rankingWrapper}>
      <Heading as="h2" size="lg">
        Collections
      </Heading>
      <Stack
        gap={{
          '@initial': 'x4',
          '@1024': 'x6',
        }}
      >
        {!loading && data?.tokenContracts.length > 0 &&
          data?.tokenContracts.map((collection) => (
            <RankingRow key={collection.id} collection={collection} />
          ))}
      </Stack>
    </Stack>
  )
}
