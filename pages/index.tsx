import { getHomePage } from '../utils/graphcms';
import PreviewBanner from '../components/preview-banner';
import ImageCard from '@/components/ImageCard';
import { Box, Grid, Title, Text, Button } from '@mantine/core';
import Container from '@/components/Container';
import { BsArrowRight } from 'react-icons/bs';
import ProgramFeatures from '@/components/ProgramFeatures';
import VideoPlayer from '@/components/VideoPlayer';

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

      {/* Featured In */}

      {/* Video Player */}
      <VideoPlayer />

      {/* Program Features */}
      <ProgramFeatures
        badge={'Strength'}
        variant="gradient"
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
        body={
          'I suggest you try it again, Luke. This time, let go your conscious self and act swiftly. Sign up now'
        }
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
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
