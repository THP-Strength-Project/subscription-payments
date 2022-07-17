import { getPortalUrl } from '../utils/stripe-client';
import { stripe } from '@/utils/stripe';
import { getUserFromToken } from '../utils/auth';
import { useForm } from '@mantine/form';
import { post } from '@/utils/api';
import { Box, Text, Group, Input, Badge } from '@mantine/core';
import Container from '@/components/Container';
import HeroTitle from '@/components/HeroTitle';
import Button from '@/components/Button';
import PasswordField from '@/components/PasswordField';
import InputField from '@/components/InputField';
import { useState } from 'react';
import ErrorMessage from '@/components/ErrorMessage';

export default function Account({ user, plan }) {
  const fetchPortal = async () => {
    const data = await getPortalUrl();
    if (data.error) {
      setError(data.message);
      return;
    }
    location.href = data.url;
  };

  const passwordForm = useForm({
    initialValues: {
      password: '',
      newPassword: ''
    },

    validate: {
      newPassword: (value, values) =>
        value === values.password ? 'Passwords are the same' : null
    }
  });

  const emailForm = useForm({
    initialValues: {
      newEmail: ''
    },

    validate: {
      newEmail: (value) => (value === user.email ? 'Emails as the same' : null)
    }
  });

  const [errorMessage, setError] = useState('');

  const onSubmit = async (values) => {
    const data = await post('/change-password', values);
    if (data.error) {
      setError(data.message);
    }
    passwordForm.reset();
  };

  const handleChangeEmail = async (values) => {
    const data = await post('/change-email', values);
    if (data.error) {
      setError(data.message);
    }
    emailForm.reset();
  };

  return (
    <Container sx={{ padding: '5em 0' }}>
      <ErrorMessage
        message={errorMessage}
        onClose={() => {
          setError('');
        }}
      />
      <Box p="sm">
        <Box mb="xl">
          <HeroTitle text="Billing" justify="start" size={2} color="black" />
          <Box
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[1],
              padding: '2em',
              borderRadius: '2em'
            })}
          >
            <Box sx={{ marginBottom: '2em' }}>
              <Badge variant="outline">Current Plan</Badge>
            </Box>
            <Box sx={{ marginBottom: '2em' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ paddingRight: '1.3em' }}>
                  <Text
                    sx={(theme) => ({
                      fontSize: '3em',
                      color: theme.colors.gray[8]
                    })}
                  >
                    {plan.name}
                  </Text>
                </Box>
                <Box>
                  <Text sx={{ fontSize: '1.2em' }}>
                    / every {plan.interval}
                  </Text>
                  <Text
                    sx={(theme) => ({
                      fontSize: '1.2em',
                      color: theme.colors.green[6]
                    })}
                  >
                    ${plan.amount / 100}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <Button
                onClick={fetchPortal}
                text={'Change Plan'}
                color="black"
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <HeroTitle text="Settings" justify="start" size={1} color="black" />
          <Box
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[1],
              padding: '2em',
              borderRadius: '2em'
            })}
          >
            <Box mb="lg">
              <Box sx={{ paddingRight: '1.3em', marginBottom: '2em' }}>
                <Text
                  sx={(theme) => ({
                    fontSize: '3em',
                    color: theme.colors.gray[8]
                  })}
                >
                  Change Password
                </Text>
              </Box>
              <form onSubmit={passwordForm.onSubmit(onSubmit)}>
                <PasswordField
                  label="Current Password"
                  placeholder="Password"
                  {...passwordForm.getInputProps('password')}
                />

                <Box sx={{ marginTop: '2em' }}>
                  <PasswordField
                    label="New password"
                    placeholder="New password"
                    {...passwordForm.getInputProps('newPassword')}
                  />
                </Box>

                <Group position="right" mt="md">
                  <Button type="submit" color="black" text="Change" />
                </Group>
              </form>
            </Box>

            {/** */}
            <Box>
              <Box sx={{ paddingRight: '1.3em', marginBottom: '2em' }}>
                <Text
                  sx={(theme) => ({
                    fontSize: '3em',
                    color: theme.colors.gray[8]
                  })}
                >
                  Change Email
                </Text>
              </Box>
              <form onSubmit={emailForm.onSubmit(handleChangeEmail)}>
                <Box>
                  <InputField
                    label="Current Email"
                    initialvalue={user.email}
                    value={user.email}
                    disabled
                    readOnly
                  />
                </Box>

                <Box sx={{ marginTop: '2em' }}>
                  <InputField
                    mt="sm"
                    label="New Email"
                    type="email"
                    placeholder="New Email"
                    {...emailForm.getInputProps('newEmail')}
                  />
                </Box>

                <Group position="right" mt="md">
                  <Button type="submit" color="black" text="change" />
                </Group>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export async function getServerSideProps(context) {
  console.log(context.req.cookies);

  let user;
  try {
    user = await getUserFromToken(context.req.cookies);
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  //handle error and loading states here

  try {
    const subscriptions = await stripe.subscriptions.list({
      limit: 1,
      customer: user.customerId
    });
    const { amount, product } = subscriptions.data[0]?.items?.data[0]?.plan;
    const productObj = await stripe.products.retrieve(product as string);
    return {
      props: {
        user: {
          email: user.email,
          id: user.id,
          name: user.name
        },
        plan: {
          amount,
          name: productObj.name,
          interval: subscriptions?.data[0]?.plan?.interval
        }
      }
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
}