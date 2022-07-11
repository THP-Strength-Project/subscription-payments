import { FC } from 'react'
import { Anchor, Box, Text, CSSObject, MantineTheme } from '@mantine/core'
import Link from 'next/link'

const linkStyles: CSSObject = (theme: MantineTheme) => ({
  textDecoration: 'none',
  fontWeight: 'normal',
  fontSize: '2.4em',
  color: theme.colors.gray[1],
  '&:hover': {
    textDecoration: 'none'
  }
})

const FooterLinkList: FC<{ links: any[]; title: string }> = ({ links, title }) => {
  return (
    <Box>
      <Text
        sx={(theme) => ({
          fontSize: '1.2em',
          color: theme.colors.gray[6],
          fontWeight: 'bold',
          marginBottom: '2em'
        })}
      >
        {title}
      </Text>
      <Box>
        {links.map((link) => {
          if (!link.external && !link.mail) {
            return (
              <Box my="1em">
                <Link href={link.url} passHref>
                  <Anchor href={link.url} sx={linkStyles}>
                    {link.label}
                  </Anchor>
                </Link>
              </Box>
            )
          }

          return (
            <Box my="1em">
              <Anchor href={link.url} sx={linkStyles} target={link.external ? '_blank' : ''}>
                {link.label}
              </Anchor>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

FooterLinkList.defaultProps = {
  links: [],
  title: 'list'
}

export default FooterLinkList
