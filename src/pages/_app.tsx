import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

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
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
