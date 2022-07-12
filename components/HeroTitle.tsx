import { FC } from 'react'
import { Title } from '@mantine/core'
import { motion, Variants, HTMLMotionProps } from 'framer-motion'

// create an interface for out components props vs doing them inline inside of FC
// extend the HTMLMotionProps from motion so we get the autocomplete
// for motion elements on our component
interface HeroTitleProps extends HTMLMotionProps<'div'> {
  text: string
  color?: string
  size?: number
  delay?: number
  duration?: number
}

// create a motion animatable component out of the Title component
const MotionTitle = motion(Title)

// create the animation states for both the container (H1) and and it's children (each letter)
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

const HeroTitle: FC<HeroTitleProps> = ({ text, color, size, delay = 0, duration = 0.05 }) => {
  const fontSize = size ? `${size}rem` : '4rem'
  // To do the animation, we need to seperate every letter,
  // this is the same as doing a .split('')
  const letters = Array.from(text)
  return (
    <MotionTitle
      order={1}
      sx={(theme) => ({
        fontSize,
        color: color || theme.colors.violet[3],
        lineHeight: '80px',
        letterSpacing: '-2px',
        userSelect: 'none',
        display: 'flex'
      })}
      initial="hidden"
      animate="visible"
      variants={container({ delay, duration })}
    >
      {letters.map((letter, i) => (
        // we must convert an empty ' ' into the actual unicode value otherwise
        // JSX will not actually render an empty space
        // https://www.htmlsymbols.xyz/unicode
        <motion.span variants={child} key={i}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </MotionTitle>
  )
}

export default HeroTitle
