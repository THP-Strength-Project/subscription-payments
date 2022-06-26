import { Box } from '@mantine/core'

const Section = ({ children, ...rest }) => {
  return (
    <Box my={240} {...rest}>
      {children}
    </Box>
  )
}

export default Section
