import { ZDK } from '@zoralabs/zdk'
import { Network, Chain } from '@zoralabs/zdk/dist/queries/queries-sdk'

export const zdk = new ZDK({
  endpoint: 'https://api.zora.co/graphql',
  apiKey: process.env.NEXT_PUBLIC_ZORA_API_KEY
})
