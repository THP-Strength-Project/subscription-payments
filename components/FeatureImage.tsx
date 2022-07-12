import { FC } from 'react'
import { AspectRatio, Box, Image } from '@mantine/core'

const FeatureImage: FC<{ image: string; width?: string }> = ({ image, width = '100%' }) => {
  return (
    <Box
      sx={{
        width,
        maxWidth: '600px',
        borderRadius: '1.8em',
        overflow: 'hidden',
        position: 'relative',
        padding: '1em'
      }}
    >
      <Box sx={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', overflow: 'hidden' }}>
        <Image src="/gradient.png" placeholder="blur" />
      </Box>
      <AspectRatio ratio={4 / 3}>
        <Image
          alt="Panda"
          src={image || 'https://media.graphassets.com/fsoA5g2CTlunlHr2TiRw'}
          sx={{ borderRadius: '2em' }}
        />
      </AspectRatio>
    </Box>
  )
}
export default FeatureImage
