import { FC } from 'react'
import { Box, Grid, Paper, Badge, Text, List, Button, useMantineTheme, Anchor } from '@mantine/core'
import { BsCheckCircle } from 'react-icons/bs'
import NextLink from 'next/link'

const PriceCard: FC<{
  stripePrice: { months: number; amount: number; id: string }
  badge?: string
  badgeColor?: string
  buttonText: string
}> = ({ stripePrice, badge, badgeColor, buttonText }) => {
  const theme = useMantineTheme()
  const month = stripePrice.months === 1 ? 'month' : 'months'

  return (
    <Paper sx={{ padding: 40, textAlign: 'left' }} shadow="md" radius="lg">
      <Badge variant="filled" color={badgeColor || 'green'}>
        {badge || ''}
      </Badge>
      <Grid align={'center'} justify="left" columns={2} grow={false} my="xl" mt={30}>
        <Text sx={{ fontSize: '3.75em' }} weight="bold">
          {'$' + stripePrice.amount}
        </Text>
        <Text size="xl" color={'gray'}>
          /{stripePrice.months + ' ' + month}
        </Text>
      </Grid>
      <Box my="xl">
        <Text size="lg" sx={(theme) => ({ color: theme.colors.gray[6] })}>
          Obi-Wan is here. The Force is with him. Don't act so surprised, Your Highness. You weren't on any mercy
          mission this time.
        </Text>
      </Box>

      <Box my="xl">
        <List spacing="sm" size="md" center icon={<BsCheckCircle fontSize={'1.75em'} color={theme.colors.green[5]} />}>
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Clone or download repository from GitHub</List.Item>
        </List>
      </Box>
      <Box sx={{ width: '100%' }} my="xl">
        <NextLink href={`/signup?price=${stripePrice.id}`}>
          <a>
            <Button fullWidth color="blue" size="lg" sx={{ textDecoration: 'none' }}>
              {buttonText}
            </Button>
          </a>
        </NextLink>
      </Box>
    </Paper>
  )
}

export default PriceCard
