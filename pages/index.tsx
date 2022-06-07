import { getHomePage } from '../utils/graphcms';
import PreviewBanner from '../components/preview-banner';
import ImageCard from '@/components/ImageCard';
import FeaturedIn from '@/components/FeaturedIn';
import { Box, Grid, Title, Text, Button, Image } from '@mantine/core';
import Container from '@/components/Container';
import { BsArrowRight } from 'react-icons/bs';

const Home = ({ content, preview }) => {
  return (
    <Box>
      <PreviewBanner preview={preview} />
      {/* hero */}
      <Container
        sx={{
          height: 'calc(100vh - 50px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grid gutter={80}>
          <Grid.Col
            span={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Box py={40}>
              <Title order={1}>{content.title}</Title>
            </Box>
            <Box py={20}>
              <Text size="xl">{content.subTitle}</Text>
            </Box>
            <Box py={80} sx={{ width: '100%' }}>
              <Button rightIcon={<BsArrowRight />} size="xl">
                {content.buttonLabel}
              </Button>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <ImageCard src={content.featuredImage.url} alt="cat" />
          </Grid.Col>
        </Grid>
      </Container>

      {/* logos */}
      <FeaturedIn content={content} />
    </Box>
  );
};

export default Home;
export async function getStaticProps({ preview = false }) {
  const page = await getHomePage(preview);

  return {
    props: {
      content: page,
      preview
    },

    revalidate: 10
  };
}
