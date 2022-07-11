import { FC } from 'react'
import Image from 'next/image'
import { AspectRatio, Box } from '@mantine/core'

const FeatureImage: FC<{ image: string; maxWidth?: number; width?: string }> = ({
  image,
  maxWidth,
  width = '100%'
}) => {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: '1.8em',
        overflow: 'hidden',
        boxShadow: theme.shadows.sm,
        maxWidth: maxWidth ? `${maxWidth}em` : '50em',
        width
      })}
    >
      <AspectRatio ratio={4 / 3} mx="auto">
        <Image
          src={image || 'https://media.graphassets.com/fsoA5g2CTlunlHr2TiRw'}
          alt="Panda"
          layout="fill"
          placeholder="blur"
          blurDataURL={`/_next/image?url=/${image}&w=16&q=1`}
        />
      </AspectRatio>
    </Box>
  )
}
export default FeatureImage
