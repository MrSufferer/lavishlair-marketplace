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

const collections: string[] = [
  '0xb632fD44053B09bddDaF92dE2C212bB12Ce8DbDF',
  '0xe169c2ed585e62b1d32615bf2591093a629549b6',
  '0x80095419BbD6fc42701400C08119B23C1671Ad4E',
  '0x97e54d96a1c1f6b183aa38316050ac05431857f5',
  '0x5a79182165a2917ef9cccf33f472fe22afffeff8',
  '0x4d2bb7d45bbe10e43ad1ba569ce85f19e85812a3',
  '0x551e8866512183c35176752741cfd3ce9e3a6c0e',
  '0xd9e49f550d0f605e3ccee3167ec14ee7a9134ddb',
  '0xeef77d7f89090667f5618acc194d66d2cba42c76',
  '0xdB05F0d43B15fba15A003B1fE7933441e04F0802',
  '0xb9b096c521e7356888fd3cb04a3af943f401b86b',
  '0x2605aFBb22c59296C16ef5e477110357F760b20F',
  '0xe451fe020e8d554c10510c0572aba06eed1dcdcd',
  '0x643AfeE78bD8C693Be049AA40e337fD15CdFB61b',
  '0x494715b2a3c75dadd24929835b658a1c19bd4552',
  '0x70b44ea398a33593af1cb348f3837b89a85d4f91',
  '0x9e1f32b2BBeDe1a544b69e5403860Bba8542962B',
]

const goerliCollection: string[] = [
  '0x28ba8af8c8730f4c39fb0ac9779372183fb4ead9',
  '0x7c07a0572c40b1c5d58d9010265604862a45731e',
  '0xf4729E73B5d6eFc3a68f35FC2450929e0a7DA19c',
  '0x61ef03dde2429198d68e2eb18512ae14bfe5744d',
  '0x46bef163d6c470a4774f9585f3500ae3b642e751',
  '0xf4910c763ed4e47a585e2d34baa9a4b611ae448c',
  '0x7c07a0572c40b1c5d58d9010265604862a45731e'
]

export const collectionAddresses = goerliCollection.map((collection) =>
  collection.toLowerCase()
)

export const allAddresses = daoAddresses.concat(collectionAddresses)
