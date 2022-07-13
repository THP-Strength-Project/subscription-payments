import { Box } from '@mantine/core'
import { motion, Variants } from 'framer-motion'

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const MotionBox = motion(Box)

const MobileMenuListItem = ({ i }) => {
  // const style = { border: `2px solid ${colors[i]}` }
  return (
    <MotionBox
      sx={{
        margin: 0,
        listStyle: 'none',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      component="li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Box
        sx={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          flex: '40px 0',
          marginRight: '20px',
          border: '1px solid #FF008C'
        }}
      />
      <Box
        sx={{
          borderRadius: '5px',
          width: '200px',
          height: '20px',
          flex: 1,
          border: '1px solid #D309E1'
        }}
      />
    </MotionBox>
  )
}

export default MobileMenuListItem
