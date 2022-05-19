import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { post } from '@/utils/api';

const SignIn = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
      // password: (value) => '^(?=.*[a-z])(?=.*[A-Z](?=.{6,})'
    }
  });

  const signIn = async ({ email, password }) => {
    alert('hello');
    const result = await post('/signin', { email, password });
    console.log(result);
  };

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(signIn)}>
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

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default SignIn;
