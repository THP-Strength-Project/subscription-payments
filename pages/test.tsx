import HeroTitle from '@/components/HeroTitle'
import VideoBox from '@/components/VideoBox'
import Button from '@/components/Button'
import TestimonyCard from '@/components/TestimonyCard'
import Feature from '@/components/Feature'
import BottomCTA from '@/components/BottomCTA'
import Footer from '@/components/Footer'

const TestPage = () => {
  const features = [
    {
      title: 'Write more',
      titleWithColor: 'Full color text',
      body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa'
    },
    {
      title: 'Write more',
      titleWithColor: 'Full color text',
      body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa',
      image: 'https://media.graphassets.com/HJSij3UcQKW2fi1CrOIR'
    },
    {
      title: 'Write more',
      titleWithColor: 'Full color text',
      body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa. Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa',
      image: 'https://media.graphassets.com/D58wQFDMQsWyEvO40Zp4'
    }
  ]

  return (
    <div>
      <HeroTitle text="Jump. Higher. Now." />
      <VideoBox />
      <Button text="Click me" type="filled" size={1} />
      <TestimonyCard title="This is my name" />
      {features.map((feature, i) => (
        <Feature feature={feature} reverse={i % 2 === 1 ? true : false} />
      ))}
      <BottomCTA />
      <Footer />
    </div>
  )
}

export default TestPage
