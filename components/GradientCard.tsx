import { Box, Button, Grid, Title, Text } from '@mantine/core'
import Container from './Container'
import { BsArrowRight } from 'react-icons/bs'

const GradientCard = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #24243E 0%, #0F0C29 100%)',
        width: '100vw'
      }}
    >
      <Container>
        <Grid
          gutter={80}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Grid.Col span={6}>
            <Box py={40} px={40}>
              <Title
                order={2}
                sx={{
                  background: 'linear-gradient(270deg, #6A82FB 0%, #FC5C7D 100%)',
                  WebkitTextFillColor: 'transparent',
                  webkitBackgroundClip: 'text',
                  webkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  paddingBottom: 20
                }}
              >
                I'm surprised you had the courage to take the responsibility yourself.
              </Title>
              <Text size="lg" color="#9E9E9E">
                A tremor in the Force. The last time I felt it was in the presence of my old master. Don't act so
                surprised, Your Highness.
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col span={6} sx={{ textAlign: 'right' }}>
            <Box>
              <Button rightIcon={<BsArrowRight />} size="xl">
                Sign up now
              </Button>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}

export default GradientCard
