import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { Heading, Box } from '@zoralabs/zord'
import { RawDisplayer } from 'components/utils'
import { NFTCard } from '@media/NFTCard'
import { NFTProvider } from '@shared'

export function TestNftData({ data }: { data: Token }) {
  return (
    <>
      <Heading>{data?.contract.name}</Heading>
      <NFTProvider
        key={`${data?.contract.id}-${data?.tokenID}`}
        contractAddress={data?.contract.id}
        tokenId={data?.tokenID}
        initialData={data}
      >
        <Box style={{ width: '400px' }}>{data && <NFTCard />}</Box>
      </NFTProvider>
      <Heading>Last Refresh Time</Heading>
      {/* <RawDisplayer data={data?.rawData?.APIIndexer?.lastRefreshTime} /> */}
      <Heading>Markets</Heading>
      {/* {data?.markets &&
        data?.markets.map((data) => (
          <RawDisplayer
            key={data.createdAt.transactionHash}
            data={{ ...data?.createdAt, status: data?.status }}
          />
        ))} */}
      {/* <RawDisplayer data={data?.markets} /> */}
      <Heading>ALL NFT DATA - via useNFT nfthooks</Heading>
      <RawDisplayer data={data} />
    </>
  )
}
