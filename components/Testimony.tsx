import { Box, Grid, Title, Text, Button, Image, Paper } from '@mantine/core';
import Container from '@/components/Container';
import ImageCard from './ImageCard';

const Testimony = ({ content }) => {
  console.log(content.testimonials);
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '100px'
        }}
      >
        <Title order={3}>{content.testimonyTitle}</Title>
        <Title order={1}>{content.testimonySubtitle}</Title>
        <Title order={5} sx={{ color: 'dark grey', fontWeight: 'lighter' }}>
          {content.testimonySubheader}
        </Title>
      </Box>
      <Grid justify="space-between" align="center" grow gutter="xs">
        {content.testimonials.map((tes) => (
          <Grid.Col span={4}>
            <Paper shadow="xs" p={5} radius="md" m={40}>
              <Grid
                justify="space-between"
                align="center"
                grow
                gutter="xl"
                p={6}
              >
                <Grid.Col span={3}>
                  <Image src={tes.clientImage.url} height={80} fit="contain" />
                </Grid.Col>
                <Grid.Col span={9}>
                  <Box sx={{ fontWeight: 'bold' }}>{tes.clientName}</Box>
                  <Text sx={{ fontWeight: 'normal' }}>
                    {tes.clientTestimony}
                  </Text>
                </Grid.Col>
              </Grid>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimony;
