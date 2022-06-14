import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'red',
  fontFamily: 'Inter',
  lineHeight: '',
  primaryShade: 5,
  defaultRadius: 'sm',
  colors: {
    blue: [
      '#eceefe',
      '#d8ddfd',
      '#b1bafb',
      '#8b98f9',
      '#6475f7',
      '#3d53f5',
      '#3142c4',
      '#253293',
      '#182162',
      '#0c1131'
    ],
    purple: [
      '#eeecfb',
      '#ddd9f7',
      '#bbb2ef',
      '#9a8ce8',
      '#7865e0',
      '#563fd8',
      '#4532ad',
      '#342682',
      '#221956',
      '#110d2b'
    ],
    mint: [
      '#f9fdfe',
      '#f4fafd',
      '#e9f6fa',
      '#ddf1f8',
      '#d2edf5',
      '#c7e8f3',
      '#9fbac2',
      '#778b92',
      '#505d61',
      '#282e31'
    ],
    green: [
      '#F4FBF7',
      '#e8f6ee',
      '#d1eedd',
      '#a3ddbc',
      '#5dc389',
      '#18a957',
      '#11763d',
      '#0a4423',
      '#052211',
      '#021109'
    ],
    yellow: [
      '#FFFBF5',
      '#fff8eb',
      '#fff1d7',
      '#ffe4af',
      '#ffcf74',
      '#ffbb38',
      '#b38327',
      '#664b16',
      '#33250b',
      '#191306'
    ],
    red: [
      '#FDF1F4',
      '#fce8ec',
      '#f9d0d9',
      '#f2a2b3',
      '#e95c7b',
      '#df1642',
      '#9c0f2e',
      '#59091a',
      '#2d040d',
      '#160207'
    ],
    grey: [
      '#fcfcfc',
      '#f5f5f5',
      '#eeeeee',
      '#e0e0e0',
      '#bdbdbd',
      '#9e9e9e',
      '#757575',
      '#616161',
      '#424242',
      '#323232'
    ]
  },
  fontSizes: {
    xs: 9,
    sm: 11,
    md: 13,
    lg: 16,
    xl: 19
  },
  radius: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 10
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20
  },
  shadows: {
    xs: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    sm: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    md: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    lg: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    xl: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
  },
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1200,
    xl: 1400
  },
  headings: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    sizes: {
      h1: {
        fontSize: 59,
        lineHeight: '110%'
      },
      h2: {
        fontSize: 49,
        lineHeight: '110%'
      },
      h3: {
        fontSize: 41,
        lineHeight: '110%'
      },
      h4: {
        fontSize: 34,
        lineHeight: '110%'
      },
      h5: {
        fontSize: 23,
        lineHeight: '110%'
      },
      h6: {
        fontSize: 19,
        lineHeight: '110%'
      }
    }
  },
  loader: 'oval'
};

export default theme;
