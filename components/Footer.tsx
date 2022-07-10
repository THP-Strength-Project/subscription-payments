import { Box, Grid, Image } from '@mantine/core'
import NavLink from '@/components/NavLink'
import Container from '@/components/Container'

const Footer = ({ links = [], logo = '' }) => {
  return (
    <Container>
      <Box
        sx={{
          padding: '90px'
        }}
      >
        <Box>
          <Image src={logo} height={50} fit="contain" />
        </Box>
        <Grid>
          {links.map((link) => {
            return (
              <Grid.Col span={2} sx={{ paddingTop: 30 }}>
                <NavLink href={link.link} name={link.linkLabel} />
              </Grid.Col>
            )
          })}
        </Grid>
      </Box>
      <Box sx={{ paddingLeft: 360, marginBottom: 30 }}>
        © Copyrights 2022 THP Strength | All Rights Reserved | Terms of Services
      </Box>
    </Container>
  )
}

export default Footer
