import { Box } from '@mantine/core'
import { motion } from 'framer-motion'
import MobileMenuListItem from './MobileMenuListItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const itemIds = [0, 1, 2, 3, 4]
const MotionBox = motion(Box)

const MobileMenuList = () => (
  <MotionBox
    component="ul"
    variants={variants}
    sx={{
      padding: '25px',
      position: 'absolute',
      top: '100px',
      width: '230px',
      margin: 0,
      zIndex: 4
    }}
  >
    {itemIds.map((i) => (
      <MobileMenuListItem i={i} key={i} />
    ))}
  </MotionBox>
)

export default MobileMenuList
