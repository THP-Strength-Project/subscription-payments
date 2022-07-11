import theme from './theme'

const { xs, sm, md, lg, xl } = theme.breakpoints

export const breakpoints = {
  phone: `@media (max-width: ${xs})`,
  tablet: `@media (min-width: ${sm})`,
  laptop: `@media (min-width: ${md})`,
  desktop: `@media (min-width: ${lg})`,
  monitor: `@media (min-width: ${xl})`
}
