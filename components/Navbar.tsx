import { Box, Header, Grid, Image, SimpleGrid } from '@mantine/core'
import Button from './Button'
import Container from './Container'
import MobileMenu from './MobileMenu'
import { breakpoints } from '@/utils/breakpoints'

const Navbar = () => {
  const buttonSize = 1.4

  return (
    <Header height={80} p="xl">
      <Box
        sx={{ display: 'none', [breakpoints.phone]: { display: 'unset' }, [breakpoints.tablet]: { display: 'unset' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <MobileMenu />
          <Image src="https://media.graphassets.com/vVvn7KnOTCqulY0rI9Yq" sx={{ width: '100%', maxWidth: '40px' }} />
        </Box>
      </Box>
      <Container
        sx={{
          [breakpoints.tablet]: { display: 'none' },
          [breakpoints.phone]: { display: 'none' }
        }}
      >
        <Grid justify="space-between" gutter="sm" align="center">
          <Grid.Col span={3}>
            <Image src="https://media.graphassets.com/vVvn7KnOTCqulY0rI9Yq" sx={{ width: '100%', maxWidth: '40px' }} />
          </Grid.Col>
          <Grid.Col span={5}>
            <Grid align="center" justify="center">
              <Grid.Col span={4}>
                <Button color="white" size={buttonSize} text="Pricing" />
              </Grid.Col>
              <Grid.Col span={4}>
                <Button color="white" size={buttonSize} text="Team" />
              </Grid.Col>
              <Grid.Col span={4}>
                <Button color="white" size={buttonSize} text="Other" />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={3}>
            <Grid align="center" justify="center" gutter={20}>
              <Grid.Col span={5}>
                <Button color="transparent" size={buttonSize} text="Login" />
              </Grid.Col>
              <Grid.Col span={5}>
                <Button color="black" size={buttonSize} text="Signup" />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Header>
  )
}

export default Navbar
