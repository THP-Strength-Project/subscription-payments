import Container from './Container';
import { Box, Grid, Text, Button, Badge, Divider } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import ButtonLink from './ButtonLink'
import ImageCard from './ImageCard';

const ProgramFeatures = ({ feature, even, badge }) => {
  return (
    <Box sx={theme => ({
      padding: '80px 0px',
      backgroundColor: even ? theme.colors.gray[0] : theme.white
    })}>
      <Container>
        <Grid gutter={150} sx={{ alignItems: 'center' }}>
          <Grid.Col span={6} sx={{ order: even ? 1 : 0 }}>
            <Box sx={{ width: '100%' }}>
              <Badge variant='filled' size="lg" color={badge}>{feature.badgeText}</Badge>
            </Box>
            <Box pt={30 } pb={10}>
              <Text sx={{fontSize: '2.5em', fontWeight: 'normal'}}>{feature.title}</Text>
            </Box>
            <Divider pb={60} sx={theme => ({
              borderTopColor: theme.colors.blue[1]
            })}/>
            <Box sx={{ width: '100%' }}>
              <ButtonLink href="/pricing">
                <Button rightIcon={<BsArrowRight />} size="xl">
                  {feature.buttonText}
                </Button>
              </ButtonLink>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box>
              <ImageCard image={feature.image}  />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProgramFeatures;
