import { Container as LayoutContainer } from '@mantine/core';

const Container = ({ children, ...rest }) => (
  <LayoutContainer size={1440} {...rest}>
    {children}
  </LayoutContainer>
);

export default Container;
