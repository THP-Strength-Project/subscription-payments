import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import MobileMenuListItem from './MobileMenuListItem';

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
  { text: 'Pricing', link: '/pricing' },
  { text: 'Team', link: '/team' },
  { text: 'FAQs', link: '/other' },
  { text: 'Login', link: '/login' },
  { text: 'Signup', link: '/signup' }
];
const MotionBox = motion(Box);

const MobileMenuList = ({ toggle }) => (
  <MotionBox
    component="ul"
    variants={variants}
    sx={{
      padding: '25px',
      position: 'absolute',
      top: '100px',
      width: '230px',
      margin: 0,
      zIndex: 4
    }}
  >
    {itemIds.map((i) => (
      <MobileMenuListItem toggle={toggle} i={i} key={i} />
    ))}
  </MotionBox>
);

export default MobileMenuList;
