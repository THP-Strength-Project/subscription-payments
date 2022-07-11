import { Image, AspectRatio, Box } from '@mantine/core'
import { FC } from 'react'

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
        <Image src={image || 'https://media.graphassets.com/fsoA5g2CTlunlHr2TiRw'} alt="Panda" width="100%" />
      </AspectRatio>
    </Box>
  )
}
export default FeatureImage
