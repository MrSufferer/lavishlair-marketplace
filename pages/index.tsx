import { Stack } from '@zoralabs/zord'
import { PageHeader, PageWrapper, Seo } from 'components'
import { CollectionRanking } from 'compositions/CollectionRanking'
import { BannerSlider } from 'compositions/Banner'

/* @ts-ignore */
const Home = () => {

  return (
    <PageWrapper direction="column" gap="x6">
      <Seo />
      <Stack px="x4">
        <BannerSlider />
        <CollectionRanking />
      </Stack>
    </PageWrapper>
  )
}

export default Home
