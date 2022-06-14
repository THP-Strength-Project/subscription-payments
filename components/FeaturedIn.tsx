import { Box, Grid, Title, AspectRatio, Image } from '@mantine/core';
import Container from '@/components/Container';

const FeaturedIn = ({ content }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[1]
      })}
    >
    <Container>
      <Grid justify="center" align="center" py={60}>
        <Grid.Col span={12} sx={{textAlign: 'center', marginBottom: '40px'}}>
          <Title sx={theme => ({color: theme.colors.gray[3]})}>{content.featuredInTitle}</Title>
        </Grid.Col>
          {content.featuredInAssets.map((asset) => (
            <Grid.Col span={3}>
              <AspectRatio ratio={16 / 6} sx={{maxWidth: 200}}>
                <Image src={asset.url} alt="cat" key={asset.id}/>
              </AspectRatio>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedIn;
