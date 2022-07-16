import theme from './theme';

const { xs, sm, md, lg, xl } = theme.breakpoints;

export const breakpoints = {
  phone: `@media only screen and (min-device-width: 0px) and (max-device-width: ${xs}px)`,
  tablet: `@media only screen and (min-device-width: ${
    xs + 1
  }px) and (max-device-width: 920px)`,
  laptop: `@media only screen and (min-device-width: ${
    md + 1
  }px) and (max-device-width: ${lg}px)`,
  desktop: `@media only screen and (min-device-width: ${
    lg + 1
  }px) and (max-device-width: ${xl}px)`,
  monitor: `@media only screen and (min-width: ${xl + 1}px)`
};
