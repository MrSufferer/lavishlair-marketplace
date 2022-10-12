import { useMemo } from 'react'
import { useAccount } from 'wagmi'
import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { isAddressMatch } from '@shared/utils'

export function useIsOwner(nftData: Token) {
  const { address } = useAccount()

  const isOwner = useMemo(
    () => isAddressMatch(address, nftData?.owner?.id),
    [address, nftData?.owner]
  )

  return { isOwner }
}
