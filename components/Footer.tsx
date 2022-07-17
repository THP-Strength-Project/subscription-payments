import { Box, Divider, Image, Text, Center } from '@mantine/core';
import { FC } from 'react';
import Container from '@/components/Container';
import FooterLinkList from './FooterLinkList';
import { breakpoints } from '@/utils/breakpoints';

const pageLinks = [
  { label: 'Pricing', url: '/pricing' },
  { label: 'Team', url: '/team' }
];

const contactLinks = [
  { label: 'Email', url: 'mailto:support@thpstrength.com', mail: true }
];
const supportLinks = [{ label: 'FAQ', url: '/faq' }];
const socialLinks = [
  { label: 'Twitter', url: 'https://twitter.com/name', external: true },
  { label: 'YouTube', url: 'https://youtube.com/thp', external: true }
];
const desktopColumns = {
  [breakpoints.laptop]: { width: '20%' },
  [breakpoints.desktop]: { width: '20%' },
  [breakpoints.monitor]: { width: '20%' }
};

const Footer: FC<{ logo?: string }> = ({ logo }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: 'rgb(0,6,23)',
        padding: '5em 0em'
      })}
    >
      <Container>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <Box sx={{ width: '100%', paddingBottom: '55px', ...desktopColumns }}>
            <Center>
              <Image src={logo} sx={{ width: '7em' }} />
            </Center>
          </Box>
          <Box sx={{ width: '50%', ...desktopColumns }}>
            <FooterLinkList title="Info" links={pageLinks} />
          </Box>
          <Box sx={{ width: '50%', ...desktopColumns }}>
            <FooterLinkList title="Contact" links={contactLinks} />
          </Box>
          <Box sx={{ width: '50%', ...desktopColumns }}>
            <FooterLinkList title="Support" links={supportLinks} />
          </Box>
          <Box sx={{ width: '50%', ...desktopColumns }}>
            <FooterLinkList title="Follow us" links={socialLinks} />
          </Box>
        </Box>

        <Divider
          sx={{ borderTopColor: 'rgba(255,255,255, 0.1)', margin: '2em 0px' }}
        />
        <Box>
          <Text sx={(theme) => ({ color: theme.colors.gray[6] })}>
            © THP. All right reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

Footer.defaultProps = {
  logo: 'https://media.graphassets.com/euzYniESQ2lmUXOqoo3y'
};

export default Footer;
