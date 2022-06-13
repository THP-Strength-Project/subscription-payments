import { Box, Grid, Title, Text, Button, Image, Paper } from '@mantine/core';
import NavLink from '@/components/NavLink';
import Container from '@/components/Container';

const Footer = ({ content }) => {
  return (
    <Container>
      <Box
        sx={{
          padding: '90px'
        }}
      >
        <Box>
          <Image src={content.logo.logoImage.url} height={50} fit="contain" />
        </Box>
        <Grid>
          {content.linksApi.map((link) => {
            return (
              <Grid.Col span={2}>
                <NavLink href={link.link} name={link.linkLabel} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
