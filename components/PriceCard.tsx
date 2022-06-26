import { Box, Grid, Paper, Badge, Text, List, Button, useMantineTheme} from '@mantine/core'
import {BsCheckCircle} from 'react-icons/bs'

const PriceCard = ({stripePrice}) => {
  const theme = useMantineTheme()
  const month = stripePrice.months === 1 ? 'month' : 'months'

  return (
    <Paper sx={{padding: 40, textAlign: 'left'}} shadow="md" radius="lg">
      <Badge>{stripePrice.months + ' months'}</Badge>
      <Grid align={"center"} justify="left" columns={2} grow={false} my="xl" mt={30}>
        <Text sx={{fontSize: "3.75em"}} weight="bold">{'$' + stripePrice.amount}</Text>
        <Text size="xl" color={"gray"}>/{stripePrice.months + ' ' + month}</Text>
      </Grid>
      <Box my="xl">
        <Text size="lg" sx={theme => ({color: theme.colors.gray[6]})}>
          Obi-Wan is here. The Force is with him. Don't act so surprised, Your Highness. You weren't on any mercy mission this time.
        </Text>
      </Box>

      <Box my="xl">
        <List
          spacing="sm"
          size="md"
          center
          icon={<BsCheckCircle fontSize={"1.75em"} color={theme.primaryColor}/>}
        >
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Clone or download repository from GitHub</List.Item>
        </List>
      </Box>
      <Box sx={{width: '100%'}} my="xl">
        <Button fullWidth>Select Package</Button>
      </Box>
    </Paper>
  )
}

export default PriceCard