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
    light: '#FDFCE7',
    '50': '#FDFCE7',
    '100': '#F9F6BD',
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
    light: '#EAFDE8',
    '50': '#EAFDE8',
    '100': '#C4F8BF',
    '200': '#9EF395',
    '300': '#79EF6C',
    '400': '#53EB42',
    '500': '#2DE619',
    '600': '#24B814',
    '700': '#1B8A0F',
    '800': '#125C0A',
    '900': '#092E05'
  },
  primaryBlue: {
    light: '#E5F4FF',
    '50': '#E5F4FF',
    '100': '#B8DFFF',
    '200': '#8ACAFF',
    '300': '#5CB6FF',
    '400': '#2EA1FF',
    '500': '#008DFF',
    '600': '#0071CC',
    '700': '#005499',
    '800': '#003866',
    '900': '#001C33'
  },
  secondaryBlue: {
    light: '#E8FCFD',
    '50': '#E8FCFD',
    '100': '#BEF6F8',
    '200': '#95EFF4',
    '300': '#6BE9F0',
    '400': '#42E3EB',
    '500': '#18DDE7',
    '600': '#13B1B9',
    '700': '#0E858B',
    '800': '#0A585C',
    '900': '#052C2E'
  },
  primaryBlack: {
    light: '#F3F0F4',
    '50': '#F3F0F4',
    '100': '#DED5E1',
    '200': '#C8BBCE',
    '300': '#B3A0BB',
    '400': '#9E85A7',
    '500': '#886B94',
    '600': '#6D5577',
    '700': '#524059',
    '800': '#372B3B',
    '900': '#1B151E'
  }
};

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints
});

export default theme;
