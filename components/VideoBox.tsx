import { FC, useState, useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player/lazy'
import { Box, AspectRatio } from '@mantine/core'
import { FaPlay } from 'react-icons/fa'

const defaultPlaceholderUrl = 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
const defaultMainUrl = 'https://youtu.be/V7Yw6X0pNRw'

const animationVariants: Variants = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.4 } },
  hidden: { opacity: 0, scale: 0.8, y: 20 }
}

const MotionBox = motion(Box)

const VideoBox: FC<{ placeholderVideoUrl?: string; mainVideoUrl?: string }> = ({
  placeholderVideoUrl = defaultPlaceholderUrl,
  mainVideoUrl = defaultMainUrl
}) => {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
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
    <MotionBox
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={control}
      onMouseOver={(e) => setHovered(true)}
      onMouseOut={(e) => setHovered(false)}
      sx={(theme) => ({
        borderRadius: '1em',
        maxWidth: '800px',
        overflow: 'hidden',
        boxShadow: theme.shadows.md,
        position: 'relative',
        margin: '0 auto'
      })}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2
        }}
      >
        <Box
          sx={(theme) => ({
            borderRadius: '100%',
            width: '5em',
            height: '5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.gray[2],
            boxShadow: theme.shadows.lg,
            cursor: 'pointer',
            transition: 'transform .3s ease-in-out',
            transform: hovered ? 'scale(1.3)' : 'scale(1)'
          })}
          onClick={(e) => setClicked(true)}
        >
          <FaPlay size="1em" />
        </Box>
      </Box>
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer loop width="100%" height="100%" url={placeholderVideoUrl} playing volume={0} />
      </AspectRatio>

      {/* <Modal opened={clicked} withCloseButton={false} onClose={() => setClicked(false)} size="100vw">
        <ReactPlayer width="100%" height="100%" url={mainVideoUrl} playing />
      </Modal> */}
    </MotionBox>
  )
}

export default VideoBox
