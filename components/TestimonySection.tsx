import { Box, Center, Grid } from '@mantine/core'
import { FC, useEffect } from 'react'
import HeroTitle from './HeroTitle'
import TestimonyCard from './TestimonyCard'
import { motion, useAnimation, Variants, HTMLMotionProps } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TestimonySectionProps extends HTMLMotionProps<'div'> {
  title?: string
  testimonies?: { name: string; quote: string }[]
  delay?: number
  duration?: number
}

const MotionGrid = motion(Grid)
const MotionCol = motion(Grid.Col)

const container = ({ delay, duration }: { delay: number; duration: number }): Variants => ({
  hidden: {
    opacity: 0
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: duration, delayChildren: i * delay }
  })
})

const child: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200
    }
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200
    }
  }
}
const defaultTestimonies = [
  { name: 'Scott Moss', quote: 'I jumped so damn high after doing the program for a few months.' },
  { name: 'Scott Moss', quote: 'I jumped so damn high after doing the program for a few months.' },
  { name: 'Scott Moss', quote: 'I jumped so damn high after doing the program for a few months.' }
]

const TestimonySection: FC<TestimonySectionProps> = ({
  delay = 0,
  duration = 0.05,
  testimonies = defaultTestimonies
}) => {
  const control = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <Box sx={{ width: '100%' }}>
      <Center sx={{ marginBottom: '3em' }}>
        <HeroTitle order={3} size={2} duration={0.01} text="What our customers are saying" color="rgba(0,0,0,0.75)" />
      </Center>

      <MotionGrid
        justify="center"
        gutter={30}
        ref={ref}
        initial="hidden"
        animate={control}
        variants={container({ delay, duration })}
      >
        {testimonies.map((testimony) => (
          <MotionCol span={12} md={4} variants={child}>
            <TestimonyCard name={testimony.name} text={testimony.quote} sx={{ margin: '0 auto' }} />
          </MotionCol>
        ))}
      </MotionGrid>
    </Box>
  )
}

export default TestimonySection
