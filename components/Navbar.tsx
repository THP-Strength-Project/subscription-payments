import { Header, Grid, Image, SimpleGrid } from '@mantine/core'
import Button from './Button'
import Container from './Container'

const Navbar = () => {
  const buttonSize = 1.4

  return (
    <Header height={80} p="xl">
      <Container>
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
