import { FC } from 'react';
import {
  Box,
  Grid,
  Paper,
  Badge,
  Text,
  List,
  Button,
  useMantineTheme,
  Anchor
} from '@mantine/core';
import { BsCheckCircle } from 'react-icons/bs';
import NextLink from 'next/link';
import { breakpoints } from '@/utils/breakpoints';

const PriceCard: FC<{
  stripePrice: { months: number; amount: number; id: string };
  badge?: string;
  badgeColor?: string;
  buttonText: string;
  features: { id: string; featureName: string }[];
}> = ({ stripePrice, badge, badgeColor, buttonText, features }) => {
  const theme = useMantineTheme();
  const month = stripePrice.months === 1 ? 'month' : 'months';

  return (
    <Paper
      sx={{
        padding: 40,
        textAlign: 'left',
        height: '600px',
        position: 'relative'
      }}
      shadow="md"
      radius="lg"
    >
      <Badge variant="filled" color={badgeColor || 'green'}>
        {badge || ''}
      </Badge>
      <Grid
        align={'center'}
        justify="left"
        columns={2}
        grow={false}
        my="xl"
        mt={30}
      >
        <Text sx={{ fontSize: '3.75em' }} weight="bold">
          {'$' + stripePrice.amount}
        </Text>
        <Text size="xl" color={'gray'}>
          /{stripePrice.months + ' ' + month}
        </Text>
      </Grid>
      <Box my="xl">
        <Text size="lg" sx={(theme) => ({ color: theme.colors.gray[6] })}>
          Obi-Wan is here. The Force is with him. Don't act so surprised, Your
          Highness. You weren't on any mercy mission this time.
        </Text>
      </Box>

      <Box my="xl">
        <List
          spacing="sm"
          size="md"
          center
          icon={
            <BsCheckCircle fontSize={'1.75em'} color={theme.colors.green[5]} />
          }
        >
          {features.map((feature) => (
            <List.Item key={feature.id}>
              <Text size="md" weight={'bold'}>
                {feature.featureName}
              </Text>
            </List.Item>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          width: '80%',
          position: 'absolute',
          bottom: '20px',
          [breakpoints.phone]: {}
        }}
        my="xl"
      >
        <NextLink href={`/signup?price=${stripePrice.id}`} passHref>
          <Button
            component="a"
            fullWidth
            color="blue"
            sx={{ textDecoration: 'none' }}
          >
            {buttonText}
          </Button>
        </NextLink>
      </Box>
    </Paper>
  );
};

export default PriceCard;
