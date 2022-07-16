import { FC } from 'react'
import { Box, Group, Text, Anchor, PasswordInput, PasswordInputProps } from '@mantine/core'
import NextLink from 'next/link'

interface PasswordProps extends PasswordInputProps {
  forgotPasswordLink?: string
}

const PasswordField: FC<PasswordProps> = ({ forgotPasswordLink, disabled, ...rest }) => {
  return (
    <Box>
      <Group position="apart" mb={10}>
        <Text component="label" htmlFor="your-password" size="lg" weight={100}>
          Your password
        </Text>

        {forgotPasswordLink && !disabled && (
          <NextLink href={forgotPasswordLink} passHref>
            <Anchor<'a'>
              sx={(theme) => ({
                paddingTop: 2,
                color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
                fontWeight: 500,
                fontSize: '1.2em'
              })}
            >
              Forgot your password?
            </Anchor>
          </NextLink>
        )}
      </Group>
      <PasswordInput placeholder="Your password" id="your-password" disabled={disabled} {...rest} radius={30} />
    </Box>
  )
}

export default PasswordField
