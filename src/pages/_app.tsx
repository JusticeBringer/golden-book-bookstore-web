import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

import theme from '../styles/theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
