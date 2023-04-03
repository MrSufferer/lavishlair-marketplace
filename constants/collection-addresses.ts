import { DaoConfigProps, nounsAbi, lilNounsAbi } from '@noun-auction'

export const daos: DaoConfigProps[] = [
  {
    name: 'Nouns',
    contractAddress: '0xfdb7e811ff0e7e10a0a7b14536b66a501c226739',
    auctionContractAddress: '0x830BD73E4184ceF73443C15111a1DF14e495C706',
    marketType: 'NOUNS_AUCTION',
    classifierPrefix: null,
    abi: nounsAbi,
  },
  {
    name: 'LilNoun',
    contractAddress: '0xfdb7e811ff0e7e10a0a7b14536b66a501c226739',
    auctionContractAddress: '0x55e0F7A3bB39a28Bd7Bcc458e04b3cF00Ad3219E',
    marketType: 'LIL_NOUNS_AUCTION',
    classifierPrefix: {
      keyPrefix: 'lil',
      typePrefix: 'LIL_',
    },
    abi: lilNounsAbi,
  },
]

export function returnDao(collectionAddress: string | undefined) {
  if (!collectionAddress) return
  const address = collectionAddress.toLowerCase()
  return daos.find((dao) => dao.contractAddress.toLowerCase() === address)
}

export function returnDaoAuctionContract(collectionAddress: string) {
  return returnDao(collectionAddress)?.auctionContractAddress
}

export const daoAddresses = daos.map((dao) => dao.contractAddress.toLowerCase())

const goerliCollection: string[] = [
  '0xc1de309d7245916c647f2830aadfa95aa75fef9e'
]

export const collectionAddresses = goerliCollection.map((collection) =>
  collection.toLowerCase()
)

export const allAddresses = daoAddresses.concat(collectionAddresses)
