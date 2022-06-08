import Container from './Container';
import { Box, Grid, Title, Text, Button, Badge } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import ReactPlayer from 'react-player';

const ProgramFeatures = ({ badge, body, video, url, ...rest }) => {
  return (
    <Box>
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
            <Box py={40} sx={{ width: '100%' }}>
              <Badge size="lg" {...rest}>
                {badge}
              </Badge>
            </Box>
            <Box py={40}>
              <Title order={4}>{body}</Title>
            </Box>
            <Box py={80} sx={{ width: '100%' }}>
              <Button rightIcon={<BsArrowRight />} size="xl">
                Sign up now
              </Button>
            </Box>
          </Grid.Col>
          <Grid.Col
            span={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              width: '100vw'
            }}
          >
            <Box>
              <ReactPlayer url={url} playing controls />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProgramFeatures;
