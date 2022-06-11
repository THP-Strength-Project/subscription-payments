import Container from './Container';
import { Box, Grid, Title, Text, Button, Badge } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import ImageCard from './ImageCard';

const ProgramFeatures = ({ feature, alternate }) => {
  return (
    <Box>
      <Container>
        <Grid gutter={150} sx={{ alignItems: 'center' }}>
          <Grid.Col span={6} sx={{ order: alternate ? 1 : 0 }}>
            <Box sx={{ width: '100%' }}>
              <Badge size="lg">{feature.badgeText}</Badge>
            </Box>
            <Box pt={30} pb={60}>
              <Title order={4}>{feature.title}</Title>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Button rightIcon={<BsArrowRight />} size="xl">
                {feature.buttonText}
              </Button>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box>
              <ImageCard src={feature.image.url} alt="cat" />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProgramFeatures;
