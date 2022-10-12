import { ReactNode } from 'react'
import { createContext, useContext } from 'react'
import { useNFT } from '@zoralabs/nft-hooks'
import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { useNFTType } from '@zoralabs/nft-hooks'

export type NFTProps = {
  contractAddress?: string | undefined
  tokenId?: string | undefined
  initialData?: Token
  children?: ReactNode
}

export interface NFTContextTypes {
  initialData: Token | undefined
  tokenId?: string
  contractAddress?: string
}

const NFTContext = createContext<NFTContextTypes>({
  initialData: undefined,
})

export function useNFTProvider() {
  return useContext(NFTContext)
}

export function NFTProvider({
  contractAddress = undefined,
  tokenId = undefined,
  initialData,
  children,
  ...props
}: NFTProps) {

  return (
    <NFTContext.Provider
      value={{
        initialData,
        tokenId,
        contractAddress,
      }}
      {...props}
    >
      {children}
    </NFTContext.Provider>
  )
}
