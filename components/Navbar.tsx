import { Box, Header, Grid, Image, Anchor, Divider } from '@mantine/core'
import Button from './Button'
import Container from './Container'
import MobileMenu from './MobileMenu'
import NextLink from 'next/link'
import { breakpoints } from '@/utils/breakpoints'
import { useAuth } from '@/utils/hooks'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const { isSignedIn, signout } = useAuth()
  const router = useRouter()
  const buttonSize = 1.4
  const hideNavLinks = /(\/account)/.test(router.pathname)

  const onSignout = () => {
    signout()
    router.push('/')
  }

  return (
    <Header height={80} p="xl">
      <Box
        sx={{
          display: 'none',
          [breakpoints.phone]: { display: 'unset' },
          [breakpoints.tablet]: { display: 'unset' }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <NextLink href="/">
            <a>
              <Image
                src="https://media.graphassets.com/vVvn7KnOTCqulY0rI9Yq"
                sx={{ width: '100%', maxWidth: '40px' }}
              />
            </a>
          </NextLink>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <MobileMenu />
        </Box>
      </Box>
      <Container
        sx={{
          [breakpoints.tablet]: { display: 'none' },
          [breakpoints.phone]: { display: 'none' }
        }}
      >
        <Grid justify="space-between" gutter="sm" align="center">
          <Grid.Col span={3}>
            <NextLink href="/">
              <a>
                <Image
                  src="https://media.graphassets.com/vVvn7KnOTCqulY0rI9Yq"
                  sx={{ width: '100%', maxWidth: '40px' }}
                />
              </a>
            </NextLink>
          </Grid.Col>
          <Grid.Col span={5}>
            <Grid align="center" justify="center" sx={{ display: hideNavLinks ? 'none' : 'flex' }}>
              <Grid.Col span={4}>
                <Link href="/pricing" passHref>
                  <Anchor sx={{ '&:hover': { textDecoration: 'none' } }}>
                    <Button color="white" size={buttonSize} text="Pricing" />
                  </Anchor>
                </Link>
              </Grid.Col>
              <Grid.Col span={4}>
                <Link href="/team" passHref>
                  <Anchor sx={{ '&:hover': { textDecoration: 'none' } }}>
                    <Button color="white" size={buttonSize} text="Team" />
                  </Anchor>
                </Link>
              </Grid.Col>
              <Grid.Col span={4}>
                <Link href="/faq" passHref>
                  <Anchor sx={{ '&:hover': { textDecoration: 'none' } }}>
                    <Button color="white" size={buttonSize} text="FAQ" />
                  </Anchor>
                </Link>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={3}>
            <Grid align="center" justify="center" gutter={30}>
              {isSignedIn() ? (
                <>
                  <Grid.Col span={6}>
                    <Button color="transparent" size={buttonSize} text="Sign out" onClick={onSignout} />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <NextLink href={'/account'} passHref>
                      <Anchor sx={{ textDecoration: 'none' }}>
                        <Button color="black" size={buttonSize} text="my account" />
                      </Anchor>
                    </NextLink>
                  </Grid.Col>
                </>
              ) : (
                <>
                  <Grid.Col span={5}>
                    <NextLink href="/signin" passHref>
                      <Anchor
                        sx={{
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'none' }
                        }}
                      >
                        <Button color="transparent" size={buttonSize} text="Sign in" />
                      </Anchor>
                    </NextLink>
                  </Grid.Col>
                  <Grid.Col span={5}>
                    <NextLink href="/signup" passHref>
                      <Anchor
                        sx={{
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'none' }
                        }}
                      >
                        <Button color="black" size={buttonSize} text="Sign up" />
                      </Anchor>
                    </NextLink>
                  </Grid.Col>
                </>
              )}
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Header>
  )
}

export default Navbar
