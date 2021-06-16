import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { MobileFooter } from '../components/Footer/MobileFooter';
import { DesktopFooter } from '../components/Footer/DesktopFooter';
import { Header } from '../components/Header/Header';

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import allReducers from '../redux/reducers';

import theme from '../styles/theme';
import '../styles/globals.scss';

const store = createStore(allReducers, composeWithDevTools());

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider store={store}>
        <Header />
        <DesktopFooter />
        <Component {...pageProps} />
        <MobileFooter />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
