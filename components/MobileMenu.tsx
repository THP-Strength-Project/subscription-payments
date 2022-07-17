import { useRef } from 'react';
import { motion, useCycle, Variants } from 'framer-motion';
import { useDimensions } from '@/utils/hooks';
import { Box } from '@mantine/core';
import MobileMenuList from './MobileMenuList';
import MobileMenuToggle from './MobileMenuToggle';

const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const MotionBox = motion(Box);

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const ref = useRef(null);
  const { height } = useDimensions(ref);

  return (
    <MotionBox
      sx={{ width: '300px' }}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={ref}
    >
      <MotionBox
        variants={sidebar}
        sx={(theme) => ({
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '300px',
          background: '#fff',
          boxShadow: theme.shadows.md,
          zIndex: 3
        })}
      />
      {isOpen && <MobileMenuList toggle={() => toggleOpen()} />}
      <MobileMenuToggle toggle={() => toggleOpen()} />
    </MotionBox>
  );
};

export default MobileMenu;
