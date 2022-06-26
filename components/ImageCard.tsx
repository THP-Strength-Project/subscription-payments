import { imageLoader } from '@/utils/graphcms'
import { Box, Paper } from '@mantine/core'
import Image from 'next/image'

const ImageCard = ({ image }) => {
  return (
    <Box
      sx={(theme) => ({
        boxShadow: theme.shadows.sm,
        borderRadius: theme.radius.lg,
        overflow: 'clip'
      })}
    >
      <Image src={image.url} alt={'image'} width={image.width} height={image.height} loader={imageLoader} />
    </Box>
  )
}

export default ImageCard
