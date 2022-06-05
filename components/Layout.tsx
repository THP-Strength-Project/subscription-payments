import Navbar from './Navbar';
// import Footer from './Footer';
import { AppShell } from '@mantine/core';

const Layout = ({ children }) => (
  <AppShell header={<Navbar />}>{children}</AppShell>
);
export default Layout;
