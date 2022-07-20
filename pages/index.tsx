import { Box, Image, Title } from '@mantine/core'
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
import NextImage from 'next/image'
import Basketball from '../assets/basketball.png'
import Hoop from '../assets/hoop.png'
import Soccer from '../assets/footballl.png'
import Football from '../assets/american-football.png'
import ESPN from '../assets/espn.png'
import { breakpoints } from '@/utils/breakpoints'
import LogoWall from '@/components/LogoWall'

const Home: FC<{ content: HomePageContent; preview: boolean }> = ({ content, preview }) => {
  return (
    <Box sx={{ paddingTop: '2em' }}>
      <Box sx={{position: 'relative'}}>
        <Box sx={{ position: 'absolute', left: 60, top: 60 }}>
        <NextImage src={Basketball} width="200px" height="200px" />
      </Box>

      <Box sx={{ position: 'absolute', right: 400, top: 90 }}>
        <NextImage src={Hoop} width="200px" height="200px" />
      </Box>

      <Box sx={{ position: 'absolute', right: 0, top: 0 }}>
        <NextImage src={Soccer} width="200px" height="200px" />
      </Box>

      <Box sx={{ position: 'absolute', left: 200, top: 370 }}>
        <NextImage src={Football} width="200px" height="200px" />
      </Box>
      </Box>
      <Container>
        <Box component="section" sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ marginBottom: '10em' }}>
              <HeroTitle text={content.title} duration={0.08} />
            </Box>
            <Box sx={{ position: 'relative' }}>
              <VideoBox placeholderVideoUrl={content.backgroundVideo.url} />
            </Box>
          </Box>
        </Box>
        <Box component="section" mt="10em">
          <Box mb="4em">
            <HeroTitle order={3} text="Featured In" size={2} color="rgba(0,0,0,0.5)" />
          </Box>
          <LogoWall logos={[ESPN, ESPN, ESPN, ESPN]} />
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

  return {
    props: {
      content: page,
      preview
    },

    revalidate: 10
  }
}
