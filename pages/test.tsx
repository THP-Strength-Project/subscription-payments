import { Box } from '@mantine/core'
import HeroTitle from '@/components/HeroTitle'
import VideoBox from '@/components/VideoBox'
import Button from '@/components/Button'
import TestimonyCard from '@/components/TestimonyCard'
import Feature from '@/components/Feature'
import BottomCTA from '@/components/BottomCTA'
import Footer from '@/components/Footer'
import PriceBox from '@/components/PriceBox'

const TestPage = () => {
  const features = [
    {
      title: 'Write more',
      titleWithColor: 'Full color text',
      body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa',
      image: 'https://media.graphassets.com/TZxcgeiFTryijCNHnFiu'
    },
    {
      title: 'Write more',
      titleWithColor: 'Full color text',
      body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa',
      image: 'https://media.graphassets.com/PI0e1fQ5QxmCVmBOjZpa'
    },
    {
      title: 'Write more',
      titleWithColor: 'Full color text',
      body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa',
      image: 'https://media.graphassets.com/E31ICLKLRW2JfCqPiZkk'
    }
  ]

  return (
    <Box px="50px">
      <HeroTitle text="Jump. Higher. Now." />
      {/* <VideoBox /> */}
      <Button text="Click me" type="filled" size={1} />
      <TestimonyCard title="This is my name" />
      {features.map((feature, i) => (
        <Feature feature={feature} reverse={i % 2 === 1 ? true : false} />
      ))}
      <BottomCTA />
      <Footer />
      <Box sx={{ width: '400px', display: 'flex' }}>
        <PriceBox />
        <PriceBox gradient />
        <PriceBox />
      </Box>
    </Box>
  )
}

export default TestPage
