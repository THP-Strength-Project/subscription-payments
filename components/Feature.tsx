import { Grid } from '@mantine/core'
import { FC, useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FeatureImage from './FeatureImage'
import FeatureText from './FeatureText'

const imageVariants: Variants = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.3 } },
  hidden: { opacity: 0, scale: 0.8, y: 20 }
}

const textVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.2, type: 'spring', bounce: 0.3 }
  },
  hidden: { opacity: 0, scale: 0.8, y: 20 }
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
    <Grid align="center" justify="center">
      <Grid.Col span={5} sx={{ order: reverse ? 2 : 1 }}>
        <motion.div ref={ref} variants={imageVariants} initial="hidden" animate={control}>
          <FeatureImage image={feature.image} />
        </motion.div>
      </Grid.Col>
      <Grid.Col span={5} sx={{ order: reverse ? 1 : 2 }}>
        <motion.div ref={ref} variants={textVariants} initial="hidden" animate={control}>
          <FeatureText body={feature.body} title={feature.title} titleWithColor={feature.titleWithColor} />
        </motion.div>
      </Grid.Col>
    </Grid>
  )
}
export default Feature
