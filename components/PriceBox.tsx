import { FC, useEffect } from 'react'
import { Box, Text, Title, List } from '@mantine/core'
import { motion, Variants, HTMLMotionProps, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/Button'
import { BsCheckCircleFill } from 'react-icons/bs'

interface PlanProps extends HTMLMotionProps<'div'> {
  name: string
  cost: number
  interval: number
  subTitle: string
  features: string[]
  buttonText: string
  gradient?: boolean
  delay?: number
  duration?: number
}

const MotionBox = motion(Box)

const variants: Variants = {
  visible: {
    transition: { type: 'spring', damping: 12, stiffness: 200 },
    y: 0,
    opacity: 1
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: { type: 'spring', damping: 12, stiffness: 200 }
  }
}

const PriceBox: FC<PlanProps> = ({
  name = 'Basic',
  cost = 200,
  interval = 'month',
  subTitle = 'Basic plan for basic people',
  features = ['feature 1', 'feature 2', 'feature 3'],
  buttonText = 'sign up',
  gradient = false,
  delay = 0,
  duration = 0.5
}) => {
  const control = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.8 })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <MotionBox
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
      sx={{
        backgroundColor: 'rgb(226, 231, 240)',
        borderRadius: '2em',
        padding: '3em',
        background: gradient ? 'url(./dark_gradient.png) no-repeat bottom left' : '',
        backgroundSize: gradient ? 'cover' : 'initial'
      }}
    >
      <Box mb={30}>
        <Title order={5} mb={10} sx={{ color: gradient ? 'white' : 'black' }}>
          {name}
        </Title>
        <Title order={2} my={15}>
          <Box component="span" sx={{ color: gradient ? 'white' : 'black' }}>
            {'$' + cost}
          </Box>
          <Box
            component="span"
            sx={(theme) => ({
              color: theme.colors.gray[5],
              fontSize: '.75em'
            })}
          >
            {'/' + interval}
          </Box>
        </Title>
        <Title order={5} sx={(theme) => ({ color: gradient ? 'white' : theme.colors.gray[5] })} my={10}>
          {subTitle}
        </Title>
      </Box>
      <Box mb={30}>
        <List
          spacing="sm"
          size="md"
          center
          icon={<BsCheckCircleFill fontSize={'1.5em'} color={gradient ? 'white' : 'black'} />}
        >
          {features.map((feature) => (
            <List.Item key={feature}>
              <Text sx={{ fontSize: '1.4em', color: gradient ? 'white' : 'black' }}>{feature}</Text>
            </List.Item>
          ))}
        </List>
      </Box>
      <Box>
        <Button text={buttonText} color={gradient ? 'white' : 'transparent'} fullWidth size={1.4} />
      </Box>
    </MotionBox>
  )
}

export default PriceBox
