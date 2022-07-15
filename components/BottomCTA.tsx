import { FC, useEffect } from 'react';
import { Box, Title, Text } from '@mantine/core';
import Button from '@/components/Button';
import Image from 'next/image';
import { breakpoints } from '@/utils/breakpoints';
import { motion, useAnimation, Variants, HTMLMotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionTitle = motion(Title);
const MotionButton = motion(Button);

// const MotionCol = motion(Grid.Col)

const container = ({
  delay,
  duration
}: {
  delay: number;
  duration: number;
}): Variants => ({
  hidden: {
    opacity: 0
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: duration, delayChildren: i * delay }
  })
});

const child: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200
    }
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200
    }
  }
};

interface BottomCTAProps extends HTMLMotionProps<'div'> {
  title: string;
  text: string;
  buttonText: string;
  delay?: number;
  duration?: number;
}

const BottomCTA: FC<BottomCTAProps> = ({
  title,
  text,
  buttonText,
  delay = 0,
  duration = 0.05
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <Box
      sx={{
        borderTopLeftRadius: '3em',
        borderTopRightRadius: '3em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5em',
        minHeight: '70vh',
        position: 'relative',
        overflow: 'hidden',
        [breakpoints.phone]: {
          padding: '5em 1em'
        },
        [breakpoints.tablet]: {
          padding: '5em 1em'
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <Image
          src="/gradient.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
          blurDataURL={`/_next/image?url=/gradient.png&w=16&q=1`}
        />
      </Box>
      <MotionBox
        sx={{
          width: '35%',
          [breakpoints.phone]: {
            width: '100%'
          },
          [breakpoints.tablet]: {
            width: '100%'
          },
          position: 'relative',
          textAlign: 'center'
        }}
        ref={ref}
        initial="hidden"
        animate={control}
        variants={container({ delay, duration })}
      >
        <MotionTitle
          variants={child}
          order={2}
          sx={{ fontSize: '4em', marginBottom: '.5em' }}
        >
          {title}
        </MotionTitle>
        <MotionText
          variants={child}
          sx={{ fontSize: '1.75em', lineHeight: '1.3em' }}
        >
          {text}
        </MotionText>

        <Box
          sx={{ marginTop: '1.8em', display: 'flex', justifyContent: 'center' }}
        >
          <MotionButton
            variants={child}
            text={buttonText}
            color="white"
            size={1.8}
          />
        </Box>
      </MotionBox>
    </Box>
  );
};

BottomCTA.defaultProps = {
  title: 'Ready to Work with the most Intuitive Editor of All Time?',
  text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare semlacinia quam venenatis vestibulum.',
  buttonText: 'Lets go'
};

export default BottomCTA;
