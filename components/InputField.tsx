import { FC } from 'react'
import { Box, Group, Text, TextInput, TextInputProps } from '@mantine/core'
import { useUuid } from '@mantine/hooks'

interface InputFieldProps extends TextInputProps {
  label: string
  type?: 'number' | 'text' | 'password' | 'email' | 'search' | 'tel' | 'url'
}

const InputField: FC<InputFieldProps> = ({ label, type = 'text', placeholder, ...rest }) => {
  const uuid = useUuid()
  return (
    <Box>
      <Group position="apart" mb={10}>
        <Text component="label" htmlFor={uuid} size="lg" weight={100} typeof={type}>
          {label}
        </Text>
      </Group>
      <TextInput placeholder={placeholder} id={uuid} {...rest} radius={30} type={type} />
    </Box>
  )
}

export default InputField
