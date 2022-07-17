import { Box, Text } from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import AuthForm from './AuthForm';
import { useRouter } from 'next/router';
import { goToCheckout } from '@/utils/stripe-client';
import { post } from '@/utils/api';
import Container from './Container';
import Footer from './Footer';
import HeroTitle from './HeroTitle';
import { breakpoints } from '@/utils/breakpoints';
import ErrorMessage from './ErrorMessage';

const columnStyle = {
  width: '50%',
  padding: '0 1em',
  display: 'flex',
  [breakpoints.phone]: {
    width: '100%'
  },
  [breakpoints.tablet]: {
    width: '100%'
  }
};

const AuthPage: FC<{ signup?: boolean }> = ({ signup = false }) => {
  const router = useRouter();

  const [errorMessage, setError] = useState('');

  useEffect(() => {
    if (signup && !router.query.price) {
      router.push('/pricing');
    }
  }, []);

  const handleSubmit = async ({ email, password, name }) => {
    if (signup) {
      const data = await post('/signup', { email, password, name });
      if (data.error) {
        // Do something with the message
        setError(data.message);
        return;
      }
      goToCheckout(router.query.price);
    } else {
      const data = await post('/signin', { email, password });
      if (data.error) {
        // Do something with the message
        setError(data.message);
        return;
      }
      router.push('/account');
    }
  };

  return (
    <Box sx={{}}>
      <ErrorMessage
        message={errorMessage}
        onClose={() => {
          setError('');
        }}
      />
      <Container
        sx={{
          padding: '5em',
          [breakpoints.phone]: {
            padding: '0'
          },
          [breakpoints.tablet]: {
            width: '100%',
            padding: '0'
          }
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box
            sx={{
              ...columnStyle,
              [breakpoints.phone]: { display: 'none' },
              [breakpoints.tablet]: { display: 'none' }
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgb(226, 231, 240)',
                padding: '2em',
                textAlign: 'start',
                borderRadius: '2em'
              }}
            >
              <HeroTitle
                text="I can accept failure, everyone fails at something. But I can't accept not trying."
                size={2}
                color="rgba(0,0,0,0.7)"
                justify="start"
              />
              <Text
                sx={{
                  fontSize: '2em',
                  marginTop: '2em',
                  color: 'rgba(0,0,0,0.4)',
                  textAlign: 'end'
                }}
              >
                {'- '}Michael Jordan
              </Text>
            </Box>
          </Box>
          <Box sx={columnStyle}>
            <Box sx={{ width: '100%' }}>
              <AuthForm signup={signup} onSubmit={handleSubmit} />
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default AuthPage;
