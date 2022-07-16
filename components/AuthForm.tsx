import { Box, Stack, Anchor, Image, Text, Alert } from '@mantine/core'
import PasswordField from './PasswordField'
import InputField from './InputField'
import { useForm } from '@mantine/form'
import Button from './Button'
import { FC, useState } from 'react'
import HeroTitle from './HeroTitle'
import NextLink from 'next/link'

const AuthForm: FC<{ signup?: boolean; onSubmit: (values: { email: string; password: string }) => Promise<any> }> = ({
  signup = false,
  onSubmit
}) => {
  const initialValues: { email: string; password: string; name?: string } = {
    email: '',
    password: ''
  }

  if (signup) {
    initialValues.name = ''
  }

  const form = useForm({
    initialValues,

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    }
  })

  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleSubmit = async (values) => {
    setHasError(false)
    setLoading(true)
    try {
      await onSubmit(values)
    } catch (e) {
      setHasError(true)
    } finally {
      form.reset()
      setLoading(false)
    }
  }

  const inputStyles = { fontSize: '.8rem', fontWeight: 'bold', color: 'rgba(0,0,0,0.7)' }

  return (
    <Box
      sx={(theme) => ({
        boxShadow: theme.shadows.xs,
        border: `1px solid ${theme.colors.gray[2]}`,
        padding: '1.2rem 1.8rem',
        borderRadius: '3em'
      })}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Image
          src="https://media.graphassets.com/vVvn7KnOTCqulY0rI9Yq"
          sx={{ width: '100%', maxWidth: '65px', marginBottom: '3em' }}
        />
        <Box sx={{ paddingLeft: '2em' }}>
          <Text sx={{ fontSize: '2em' }}>Jump</Text>
          <Text sx={{ fontSize: '2em' }}>Higher</Text>
        </Box>
      </Box>
      <Box sx={{ marginBottom: '7em' }}>
        <HeroTitle text={signup ? 'Sign up' : 'Sign in'} size={2} />
        {hasError && (
          <Alert
            title="oops!"
            color="red"
            styles={{ title: { fontSize: '1.5em' }, message: { fontSize: '1.2em', overflow: 'visible' } }}
            sx={{ padding: '1.5em' }}
          >
            Something went wrong, try that again.
          </Alert>
        )}
      </Box>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack spacing="xl">
          {signup && (
            <InputField
              disabled={loading}
              size="lg"
              required
              label="Your name"
              placeholder="Your name"
              {...form.getInputProps('name')}
              styles={{ input: inputStyles }}
            />
          )}
          <InputField
            disabled={loading}
            size="lg"
            required
            label="Your email"
            placeholder="Your email"
            {...form.getInputProps('email')}
            styles={{ input: inputStyles }}
          />
          <PasswordField
            disabled={loading}
            size="lg"
            required
            forgotPasswordLink={signup ? null : '/forgot'}
            {...form.getInputProps('password')}
            styles={{ innerInput: inputStyles }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
            <NextLink href={signup ? '/signin' : '/signup'} passHref>
              <Anchor<'a'>
                sx={(theme) => ({
                  paddingTop: 2,
                  color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
                  fontWeight: 500,
                  fontSize: '1.2em',
                  paddingRight: '3em'
                })}
              >
                {signup ? 'Already have an account?' : "Don't have an account?"}
              </Anchor>
            </NextLink>
            <Button text={signup ? 'sign up' : 'sign in'} type="submit" size={1.2} color="black" loading={loading} />
          </Box>
        </Stack>
      </form>
    </Box>
  )
}

export default AuthForm
