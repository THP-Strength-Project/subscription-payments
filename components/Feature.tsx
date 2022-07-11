import { Grid } from '@mantine/core'
import { FC, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FeatureImage from './FeatureImage'
import FeatureText from './FeatureText'

const imageVariants = {
  visible: { opacity: 1, scale: 1, transition: { type: 'spring' } },
  hidden: { opacity: 0, scale: 0.8 }
}

const textVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.5, type: 'spring' }
  },
  hidden: { opacity: 0, scale: 0.8 }
}

const Feature: FC<{
  reverse: boolean
  feature: { image: string; body: string; title: string; titleWithColor: string }
}> = ({ feature, reverse }) => {
  const control = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <Grid align="center" justify="space-between" gutter={100}>
      <Grid.Col span={6} sx={{ order: reverse ? 2 : 1 }}>
        <motion.div ref={ref} variants={imageVariants} initial="hidden" animate={control}>
          <FeatureImage image={feature.image} />
        </motion.div>
      </Grid.Col>
      <Grid.Col span={6} sx={{ order: reverse ? 1 : 2 }}>
        <motion.div ref={ref} variants={textVariants} initial="hidden" animate={control}>
          <FeatureText body={feature.body} title={feature.title} titleWithColor={feature.titleWithColor} />
        </motion.div>
      </Grid.Col>
    </Grid>
  )
}
export default Feature
