import { Box, Title, Paper, AspectRatio } from '@mantine/core'
import Container from '@/components/Container'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ title, video }) => {
  return (
    <Box sx={(theme) => ({ backgroundColor: theme.colors.dark })}>
      <Container>
        <Box py={80} sx={{ textAlign: 'center' }}>
          <Title
            order={2}
            sx={(theme) => ({
              color: theme.white
            })}
          >
            {title}
          </Title>
          <Paper mt={60}>
            <AspectRatio ratio={16 / 9}>
              <ReactPlayer
                url={video || 'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
                controls
                width="100%"
                height="100%"
                config={{
                  file: {
                    attributes: {
                      poster: 'https://placekitten.com/g/600/339'
                    }
                  }
                }}
              />
            </AspectRatio>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default VideoPlayer
