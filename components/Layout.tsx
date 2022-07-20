import Navbar from './Navbar'
// import Footer from './Footer';
import { AppShell, Box } from '@mantine/core'

const Layout = ({ children }) => (
  <AppShell padding={0} header={<Navbar />}>
    <Box sx={{ paddingTop: '80px' }}>{children}</Box>
  </AppShell>
)
export default Layout
