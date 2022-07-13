import { Box, Center, Image } from '@mantine/core'
import Container from '@/components/Container'
import HeroTitle from '@/components/HeroTitle'
import VideoBox from '@/components/VideoBox'
import SubHero from '@/components/SubHero'
import TestimonySection from '@/components/TestimonySection'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import BottomCTA from '@/components/BottomCTA'
import { getHomePage, HomePageContent } from '@/utils/graphcms'
import { FC } from 'react'

const Home: FC<{ content: HomePageContent; preview: boolean }> = ({ content, preview }) => {
  return (
    <Box sx={{ paddingTop: '2em' }}>
      <Container>
        <Box component="section" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Box sx={{ marginBottom: '2em' }}>
              <Center>
                <Image
                  src="https://media.graphassets.com/vVvn7KnOTCqulY0rI9Yq"
                  sx={{ width: '100%', maxWidth: '60px' }}
                />
              </Center>
            </Box>
            <Box sx={{ marginBottom: '10em' }}>
              <HeroTitle text="Jump Higher Now" duration={0.01} />
            </Box>
            <Box>
              <VideoBox />
            </Box>
          </Box>
        </Box>
        <Box mt="10em" component="section">
          <SubHero text={content.miniFeature.body} buttonText={content.miniFeature.buttonText} />
        </Box>
        <Box mt="10em" component="section">
          <TestimonySection testimonies={content.testimonies} title={content.testimonyTitle} />
        </Box>
        <Box component="section" mt="10em">
          {content.featureSections.map((feature, i) => (
            <Box my="10em">
              <Feature feature={feature} reverse={i % 2 === 1 ? true : false} />
            </Box>
          ))}
        </Box>
      </Container>
      <Box>
        <BottomCTA />
        <Footer />
      </Box>
    </Box>
  )
}

export default Home
export async function getStaticProps({ preview = false }) {
  const page = await getHomePage(preview)

  console.log(page)

  return {
    props: {
      content: page,
      preview
    },

    revalidate: 10
  }
}
