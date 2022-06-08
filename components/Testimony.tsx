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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        {content.testimonials.map((tes) => {
          <Box>
            <Box>{tes.clientName}</Box>
            <Paper>{tes.clientTestimony}</Paper>
            <Image src={tes.clientImage.url} width={tes.clientImage.width} />
          </Box>;
        })}
      </Box>
    </Container>
  );
};

export default Testimony;
