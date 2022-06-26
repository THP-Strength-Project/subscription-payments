import { TextInput, Checkbox, Button, Group, Box, Image, Grid } from '@mantine/core'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useForm } from '@mantine/form'
import { post } from '@/utils/api'
import Footer from '@/components/Footer'
import { goToCheckout } from '@/utils/stripe-client'
import { getSignPage } from '@/utils/graphcms'

const SignUp = ({ content }) => {
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
  })
  const router = useRouter()

  useEffect(() => {
    if (!router.query.price) {
      router.push('/pricing')
    }
  }, [])

  const signUp = async ({ email, password, name }) => {
    await post('/signup', { email, password, name })
    goToCheckout(router.query.price)
  }

  return (
    <div>
      <Grid mx="auto">
        <Grid.Col span={6}>
          <Box
            sx={{
              maxWidth: '100%',
              backgroundColor: 'red',
              minHeight: 1300
            }}
            mx="auto"
          >
            <Image
              src={content.heroImage.url}
              height={content.heroImage.height}
              width={content.heroImage.width}
              fit="contain"
            />
            <Box
              sx={{
                maxWidth: 500,
                backgroundColor: 'ghostwhite'
              }}
              mx="auto"
            >
              {content.heroSubtitle}
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col span={6} sx={{ maxWidth: 300 }} mx="auto">
          <Image src={content.logo.url} width={60} height={80} />
          <Box>{content.signUpText}</Box>
          <Box>
            {content.signUpSubtext}{' '}
            <Link href="/sign-in">
              <a>Log In</a>
            </Link>
          </Box>
          <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={form.onSubmit(signUp)}>
              <TextInput required label="Name" placeholder="Name" {...form.getInputProps('name')} />
              <TextInput required label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />
              <TextInput required label="Password" placeholder="Password" {...form.getInputProps('password')} />

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
        </Grid.Col>
      </Grid>
      <Footer content={content.footer} />
    </div>
  )
}

export default SignUp
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
