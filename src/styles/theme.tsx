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
    '100': '#F4EE7C'
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
