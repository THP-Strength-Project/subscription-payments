import { Container as LayoutContainer } from '@mantine/core'

const Container = ({ children, ...rest }) => (
  <LayoutContainer size={1600} {...rest}>
    {children}
  </LayoutContainer>
)

export default Container
