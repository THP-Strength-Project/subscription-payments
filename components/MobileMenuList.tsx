import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import MobileMenuListItem from './MobileMenuListItem';
import { useAuth } from '@/utils/hooks';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [
  { text: 'Home', link: '/' },
  { text: 'Team', link: '/team' },
  { text: 'FAQs', link: '/faq' }
];

const isUser = [
  { text: 'Account', link: '/account' },
  { text: 'Sign out', link: '/', signout: true }
]

const defaultLinks = [
  { text: 'Sign in', link: '/signin' },
  { text: 'Sign up', link: '/signup' }
]

const MotionBox = motion(Box);

const MobileMenuList = ({ toggle }) => {
  const { isSignedIn } = useAuth();
  const links = !isSignedIn() ? itemIds.concat(defaultLinks) : itemIds.concat(isUser)
  return (
    <MotionBox
      component="ul"
      variants={variants}
      sx={{
        padding: '25px',
        position: 'absolute',
        top: '100px',
        width: '230px',
        margin: 0,
        right: -10,
        zIndex: 4
      }}
    >
      {links.map((i) => (
        <MobileMenuListItem toggle={toggle} i={i} key={i.text} />
      ))}
    </MotionBox>
  );
}

export default MobileMenuList;
