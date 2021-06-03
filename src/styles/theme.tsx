import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});

/*
When theme is light, color used is color[light]
When theme is dark, color used is color[dark]
*/

const colors = {
  primaryYellow: {
    light: '#F4EE7C',
    '100': '#F4EE7C',
    '200': '#F6F193',
    '300': '#F2EB68',
    '400': '#EFE63E',
    '500': '#EBE014',
    '600': '#BCB410',
    '700': '#8D870C',
    '800': '#5E5A08',
    '900': '#2F2D04'
  },
  primaryGreen: {
    light: '#ABF5A3',
    '100': '#ABF5A3'
  },
  primaryBlue: {
    light: '#3fa9ff',
    '100': '#3fa9ff'
  },
  secondaryBlue: {
    light: '#119DA4',
    '100': '#119DA4'
  },
  primaryBlack: {
    light: '#171219',
    '100': '#171219'
  }
};

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints
});

export default theme;
