import { Container as LayoutContainer } from '@mantine/core'

const Container = ({ children, ...rest }) => (
  <LayoutContainer size={1200} {...rest}>
    {children}
  </LayoutContainer>
)

export default Container
