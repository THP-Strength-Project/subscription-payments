import { TextInput, Button, Group, Box, Grid, Image } from '@mantine/core'
import { useForm } from '@mantine/form'
import { post } from '@/utils/api'
import { getSignPage } from '@/utils/graphcms'
import Link from 'next/link'
import Footer from '@/components/Footer'

const SignIn = ({ content }) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
      // password: (value) => '^(?=.*[a-z])(?=.*[A-Z](?=.{6,})'
    }
  })

  const signIn = async ({ email, password }) => {
    const result = await post('/signin', { email, password })
    return result
  }

  return (
    <div>
      <Grid sx={{ alignItems: 'center' }}>
        <Grid.Col span={6}>
          <Box
            sx={{
              maxWidth: '100%',
              backgroundColor: 'blue',
              minHeight: 1300
            }}
            mx="auto"
          >
            <Image
              src={content.heroImage.url}
              height={content.heroImage.height}
              width={content.heroImage.width}
              sx={{ marginLeft: 414, radius: 10 }}
            />
            <Box
              sx={{
                maxWidth: 500,
                backgroundColor: 'ghostwhite',
                fontSize: 30,
                padding: 30
              }}
              mx="auto"
            >
              {content.heroSubtitle}
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col span={6} sx={{ maxWidth: 300 }}>
          <Image src={content.logo.url} width={60} height={80} />
          <Box>{content.signInText}</Box>
          <Box>
            {content.signInSubtext}{' '}
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </Box>
          <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={form.onSubmit(signIn)}>
              <TextInput required label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />
              <TextInput required label="Password" placeholder="Password" {...form.getInputProps('password')} />

              <Link href="/forgot-password">
                <a>Forgot my password</a>
              </Link>

              <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        </Grid.Col>
      </Grid>
      <Box>
        <Footer content={content.footer} />
      </Box>
    </div>
  )
}

export default SignIn
export async function getStaticProps({ preview = false }) {
  const page = await getSignPage(preview)

  return {
    props: {
      content: page,
      preview
    },

    revalidate: 10
  }
}
