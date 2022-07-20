import { FC } from 'react'
import { AspectRatio, Box, Image } from '@mantine/core'
import NextImage from 'next/image'
import { GraphCMSAsset } from '@/utils/graphcms'

const FeatureImage: FC<{ image: GraphCMSAsset; width?: string }> = ({ image, width = '100%' }) => {
  return (
    <Box
      sx={{
        width,
        maxWidth: '600px',
        borderRadius: '1.8em',
        overflow: 'hidden',
        position: 'relative',
        padding: '1.5em'
      }}
    >
      <Box sx={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', overflow: 'hidden' }}>
        <Image src="/gradient.png" placeholder="blur" />
      </Box>
      <AspectRatio ratio={4 / 3}>
        {/* <Image
          alt="Panda"
          src={image || 'https://media.graphassets.com/fsoA5g2CTlunlHr2TiRw'}
          sx={{ borderRadius: '2em' }}
        /> */}
        <Box
          component={NextImage}
          width={image.width}
          height={image.height}
          layout="fill"
          src={image.url}
          sx={{ borderRadius: '2em' }}
          placeholder="blur"
          blurDataURL={`/_next/image?url=/gradient.png&w=16&q=1`}
        />
      </AspectRatio>
    </Box>
  )
}
export default FeatureImage
