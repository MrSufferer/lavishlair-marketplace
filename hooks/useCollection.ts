import { zdk } from '@shared'
import { useNFT } from '@zoralabs/nft-hooks'
import useSWR from 'swr'

export function useCollection(collectionAddress: string) {
  const { data, error } = useSWR(
    ['collectionInfo', collectionAddress],
    (_, collectionAddress) =>
      useNFT(collectionAddress)
  )

  return {
    collection: data,
    error,
  }
}
