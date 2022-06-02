import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { post } from '@/utils/api';
import { goToCheckout } from '@/utils/stripe-client';

const SignUp = () => {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      termsOfService: false
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
      // password: (value) => '^(?=.*[a-z])(?=.*[A-Z](?=.{6,})'
    }
  });

  const signUp = async ({ email, password, name }) => {
    await post('/signup', { email, password, name });
    goToCheckout()
  };

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(signUp)}>
        <TextInput
          required
          label="Name"
          placeholder="Name"
          {...form.getInputProps('name')}
        />
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          required
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default SignUp;
