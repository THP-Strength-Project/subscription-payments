import { Box, Text, Anchor } from '@mantine/core';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MotionBox = motion(Box);

const MobileMenuListItem = ({ i, toggle }) => {
  // const style = { border: `2px solid ${colors[i]}` }
  return (
    <MotionBox
      sx={{
        margin: 0,
        listStyle: 'none',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      component="li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={i.link} passHref>
        <Anchor
          sx={{ textDecoration: 'none' }}
          onClick={() => {
            toggle();
          }}
        >
          <Text sx={{ fontSize: '2em' }}>{i.text}</Text>
        </Anchor>
      </Link>
    </MotionBox>
  );
};

export default MobileMenuListItem;
