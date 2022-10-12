import { Collection, NetworkInfo, Chain, Network } from '@zoralabs/zdk/dist/queries/queries-sdk'
import { zdk } from '@shared'
import { useEffect, useState } from 'react'
import { collectionAddresses, daoAddresses } from 'constants/collection-addresses'
import { TokenContract } from '../apollo/__generated__/schema.graphql.types';
import { useQuery } from '@apollo/client';

import QUERY from '../apollo/graphql/queries/collections.graphql';
import { CollectionsQuery } from '../apollo/graphql/queries/collections.graphql.types';
import { returnThumbnailSize } from '@noun-auction';

// export type CollectionsData = Collection
export type CollectionsData = any

export function useCollections() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(undefined)
  const [collections, setCollections] = useState<TokenContract[] | undefined>(undefined)
  const [daos, setDaos] = useState<TokenContract[] | undefined>(undefined)

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true)
        
        /* @ts-ignore */
        console.log("start apollo query")
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchCollections()
  }, [])

  // useEffect(() => {
  //   const fetchDaos = async () => {
  //     try {
  //       setLoading(true)
  //       /* @ts-ignore */
  //       const data = await zdk.collections({
  //         where: { collectionAddresses: daoAddresses },
  //       })
  //       setDaos(data?.collections?.nodes)
  //       setLoading(false)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   fetchDaos()
  // }, [])

  return {
    loading,
    error,
    collections,
    daos,
  }
}
