import { Header, Grid } from '@mantine/core'
import NavLink from './NavLink'
const Navbar = () => {
  return (
    <Header
      height={80}
      p="lg"
      fixed
      sx={(theme) => ({
        backgroundColor: theme.colors.dark,
        borderBottom: 0,
        boxShadow: theme.shadows.sm
      })}
    >
      <Grid justify="space-between" gutter="sm" p="lg">
        <NavLink name="Logo" href="/" />
        <Grid>
          <NavLink name="Pricing" href="/pricing" />
          <NavLink name="Team" href="/team" />
          <NavLink name="FAQ" href="/faq" />
        </Grid>
      </Grid>
    </Header>
  )
}

export default Navbar
