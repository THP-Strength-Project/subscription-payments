import { Box } from '@mantine/core';
import Container from '@/components/Container';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <Box>
      <Container
        sx={{
          height: 'calc(100vh - 60px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          playing
          controls
          height="100%"
          width="200%"
        />
      </Container>
    </Box>
  );
};

export default VideoPlayer;
