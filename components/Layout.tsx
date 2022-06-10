import Navbar from './Navbar';
// import Footer from './Footer';
import { AppShell } from '@mantine/core';

const Layout = ({ children }) => (
  <AppShell padding={0} header={<Navbar />}>
    {children}
  </AppShell>
);
export default Layout;
