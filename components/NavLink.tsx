import Link from 'next/link';
import { Anchor, Text } from '@mantine/core';
import { useRouter } from 'next/router';

const NavLink = ({ href, name, ...other }) => {
  const router = useRouter();
  const isActiveRoute = router.pathname === href;

  const finalStyles = (theme) => {
    const activeStyles = {
      color: 'black'
    };

    const styles = {
      color: theme.colors.dark[2],
      fontWeight: 'bold',
      '&:hover': {
        color: 'black',
        fontWeight: 'bold'
      }
    };
    const linkStyles = isActiveRoute ? { ...styles, ...activeStyles } : styles;
    return linkStyles;
  };
  return (
    <Link href={href} passHref>
      <Anchor {...other} underline={false} sx={finalStyles}>
        <Text size="lg" px="md">
          {name}
        </Text>
      </Anchor>
    </Link>
  );
};

export default NavLink;
