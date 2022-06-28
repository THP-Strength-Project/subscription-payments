import { Box } from '@mantine/core'
import { getHomePage } from '@/utils/graphcms'
import PreviewBanner from '@/components/preview-banner'
import Hero from '@/components/Hero'
import FeaturedIn from '@/components/FeaturedIn'
import Testimony from '@/components/Testimony'
import ProgramFeatures from '@/components/ProgramFeatures'
import VideoPlayer from '@/components/VideoPlayer'
import GradientCard from '@/components/GradientCard'
import Footer from '@/components/Footer'

const badgeColors = ['red', 'green', 'purple', 'yellow']
const getBadgeColor = (i) => {
  return badgeColors[i] || Math.floor(Math.random() * badgeColors.length - 1)
}

const Home = ({ content, preview }) => {
  return (
    <Box>
      <PreviewBanner preview={preview} />
      <Hero content={content} />
      <FeaturedIn content={content} />
      <VideoPlayer title={content.videoTitle} video={content.video.url} />
      {content.featureSections.map((feature, i) => {
        const even = i % 2 === 0
        return <ProgramFeatures feature={feature} even={even} key={feature.id} badge={getBadgeColor(i)} />
      })}
      <Testimony content={content} />
      <GradientCard />
      <Footer content={content.footer} />
    </Box>
  )
}

export default Home
export async function getStaticProps({ preview = false }) {
  const page = await getHomePage(preview)

  return {
    props: {
      content: page,
      preview
    },

    revalidate: 10
  }
}
