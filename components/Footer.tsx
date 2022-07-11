import { Box, Divider, SimpleGrid, Image, Text, ThemeIcon } from '@mantine/core'
import { FC } from 'react'
import Container from '@/components/Container'
import FooterLinkList from './FooterLinkList'

const pageLinks = [
  { label: 'Pricing', url: '/pricing' },
  { label: 'Team', url: '/team' }
]

const contactLinks = [{ label: 'Email', url: 'mailto:whatever@gmail.com', mail: true }]
const supportLinks = [{ label: 'FAQ', url: '/faq' }]
const socialLinks = [
  { label: 'SignUp', url: '/signup' },
  { label: 'Twitter', url: 'https://twitter.com/name', external: true },
  { label: 'YouTube', url: 'https://youtube.com/thp', external: true }
]

const Footer: FC<{ logo: string }> = ({ logo }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: 'rgb(0,6,23)',
        padding: '5em 0px'
      })}
    >
      <Container>
        <Box>
          <SimpleGrid cols={5}>
            <Image src={logo} sx={{ width: '7em' }} />
            <Box>
              <FooterLinkList title="Info" links={pageLinks} />
            </Box>
            <Box>
              <FooterLinkList title="Contact" links={contactLinks} />
            </Box>
            <Box>
              <FooterLinkList title="Support" links={supportLinks} />
            </Box>
            <Box>
              <FooterLinkList title="Follow us" links={socialLinks} />
            </Box>
          </SimpleGrid>
        </Box>
        <Divider sx={{ borderTopColor: 'rgba(255,255,255, 0.1)', margin: '2em 0px' }} />
        <Box>
          <Text sx={(theme) => ({ color: theme.colors.gray[6] })}>© THP. All right reserved.</Text>
        </Box>
      </Container>
    </Box>
  )
}

Footer.defaultProps = {
  logo: 'https://media.graphassets.com/euzYniESQ2lmUXOqoo3y'
}

export default Footer
