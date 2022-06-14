import {Grid, Box, Button, Text, Title} from '@mantine/core'
import {BsArrowRight} from 'react-icons/bs'
import Container from './Container'
import ImageCard from './ImageCard'

const Hero = ({content}) => {
  return (
    <Box sx={theme => ({
      height: 'calc(100vh - 50px)',
      backgroundColor: theme.colors.dark
    })}>
      <Container
        sx={{
          display: 'flex',
          height: '100%',
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
              <Title order={1} sx={theme => ({color: theme.white})}>{content.title}</Title>
            </Box>
            <Box py={20}>
              <Text size="xl" color="white">{content.subTitle}</Text>
            </Box>
            <Box py={80} sx={{ width: '100%' }}>
              <Button rightIcon={<BsArrowRight />} size="xl">
                {content.buttonLabel}
              </Button>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <ImageCard image={content.featuredImage}  />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero