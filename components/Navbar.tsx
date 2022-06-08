import { Header, Grid } from '@mantine/core';
import NavLink from './NavLink';
const Navbar = () => {
  return (
    <Header height={80} p="lg" sx={{ borderBottom: 0 }}>
      <Grid justify="space-between" gutter="sm" p="lg">
        <NavLink name="Logo" href="/" />
        <Grid>
          <NavLink name="Pricing" href="/pricing" />
          <NavLink name="Team" href="/team" />
          <NavLink name="FAQ" href="/faq" />
        </Grid>
      </Grid>
    </Header>
  );
};

export default Navbar;
