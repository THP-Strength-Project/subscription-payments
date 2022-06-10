import { Box, Grid, Title, Text, Button, Image } from '@mantine/core';
import Container from '@/components/Container';
import { getHomePage } from '../utils/graphcms';

const FeaturedIn = ({ content }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[2]
      })}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          padding: '10px'
        }}
      >
        <Title order={1}>{content.featuredInTitle}</Title>
      </Box>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        {content.featuredInAssets.map((asset) => (
          <Image width="100%" height={asset.height} src={asset.url} alt="cat" />
        ))}
      </Container>
    </Box>
  );
};

export default FeaturedIn;
