import theme from '@/utils/theme';
import { Box, Image, Paper } from '@mantine/core';

const ImageCard = ({ src, alt }) => {
  return (
    <Paper radius="lg" shadow="sm">
      <Image radius="lg" src={src} alt={alt} />
    </Paper>
  );
};

export default ImageCard;
