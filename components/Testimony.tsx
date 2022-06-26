import { Box, Grid, Title, Text, Image, Paper } from '@mantine/core'
import Container from '@/components/Container'
import ImageCard from './ImageCard'

const Testimony = ({ content }) => {
  return (
    <Container>
      <Box py={80}>
        <Box sx={{ textAlign: 'center', marginBottom: 40 }}>
          <Title order={1}>{content.testimonyTitle}</Title>
          <Title order={5} sx={{ color: 'dark grey', fontWeight: 'lighter' }}>
            {content.testimonySubtitle}
          </Title>
        </Box>
        <Grid justify="space-between" align="center" grow gutter="xs">
          {content.testimonials.map((tes) => (
            <Grid.Col span={4} key={tes.id}>
              <Paper shadow="xs" p={5} radius="md" m={40}>
                <Grid justify="space-between" align="center" grow gutter="xl" p={6}>
                  <Grid.Col span={3}>
                    <Image src={tes.clientImage.url} height={80} fit="contain" />
                  </Grid.Col>
                  <Grid.Col span={9}>
                    <Box sx={{ fontWeight: 'bold' }}>{tes.clientName}</Box>
                    <Text sx={{ fontWeight: 'normal' }}>{tes.clientTestimony}</Text>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Testimony
