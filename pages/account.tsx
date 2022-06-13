import { getPortalUrl } from '../utils/stripe-client';
import { stripe } from '@/utils/stripe';
import { getUserFromToken } from '../utils/auth';
import { useForm } from '@mantine/form';
import { getAccountPage } from '@/utils/graphcms';
import { post } from '@/utils/api';
import Footer from '@/components/Footer';
import {
  Paper,
  Navbar,
  Box,
  Text,
  Button,
  PasswordInput,
  Group,
  Input,
  Container,
  Image,
  SimpleGrid
} from '@mantine/core';

export default function Account({ user, plan, content }) {
  const fetchPortal = async () => {
    const { url } = await getPortalUrl();
    location.href = url;
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
      newEmail: (value, values) =>
        value === user.email ? 'Emails as the same' : null
    }
  });

  const onSubmit = async (values) => {
    await post('/change-password', values);
    passwordForm.reset();
  };

  const handleChangeEmail = async (values) => {
    await post('/change-email', values);
    emailForm.reset();
  };

  return (
    <div>
      <header>
        <Paper shadow="xs">
          <Navbar height={60} p="sm">
            <SimpleGrid cols={4}>
              <Box>
                <Image width={30} src={content.logo.logoImage.url} />
              </Box>
              <Box>
                <Text size="lg" weight="bold">
                  Account / {user.name}
                </Text>
              </Box>
            </SimpleGrid>
          </Navbar>
        </Paper>
      </header>
      <main style={{ background: '#efefef' }}>
        <Container>
          <Box sx={{ height: 'calc(100vh - 60px)', overflowY: 'auto' }} p="sm">
            <Box mb="xl">
              <Text size="xl" weight="bold" mb="sm">
                Billing
              </Text>
              <Paper shadow="sm" p="sm">
                <Text size="lg">Current Plan</Text>
                <Text size="sm">
                  {plan.name} - {plan.amount / 100}
                </Text>

                <Button onClick={fetchPortal}>Change Plan</Button>
              </Paper>
            </Box>

            <Box>
              <Text size="xl" weight="bold" mb="sm">
                Settings
              </Text>
              <Paper shadow="sm" p="sm">
                <Box mb="lg">
                  <Text size="lg" mb="lg">
                    Change Password
                  </Text>
                  <form onSubmit={passwordForm.onSubmit(onSubmit)}>
                    <PasswordInput
                      label="Current Password"
                      placeholder="Password"
                      {...passwordForm.getInputProps('password')}
                    />

                    <PasswordInput
                      mt="sm"
                      label="New password"
                      placeholder="New password"
                      {...passwordForm.getInputProps('newPassword')}
                    />

                    <Group position="right" mt="md">
                      <Button type="submit">Change</Button>
                    </Group>
                  </form>
                </Box>

                {/** */}
                <Box>
                  <Text size="lg" mb="lg">
                    Change Email
                  </Text>
                  <form onSubmit={emailForm.onSubmit(handleChangeEmail)}>
                    <Input
                      label="Current Email"
                      initialvalue={user.email}
                      value={user.email}
                      disabled
                      readOnly
                    />

                    <Input
                      mt="sm"
                      label="New Email"
                      type="email"
                      placeholder="New Email"
                      {...emailForm.getInputProps('newEmail')}
                    />

                    <Group position="right" mt="md">
                      <Button type="submit">Change</Button>
                    </Group>
                  </form>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </main>
      <Box>
        <Footer content={content} />
      </Box>
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = await getUserFromToken(context.req.headers.cookie);

  //handle error and loading states here

  const subscriptions = await stripe.subscriptions.list({
    limit: 1,
    customer: user.customerId
  });

  const { amount, product } = subscriptions.data[0]?.items.data[0].plan;
  const productObj = await stripe.products.retrieve(product);

  const content = await getAccountPage(context.preview);
  return {
    props: {
      content,
      user: {
        email: user.email,
        id: user.id,
        name: user.name
      },
      plan: {
        amount,
        name: productObj.name
      }
    }
  };
}
