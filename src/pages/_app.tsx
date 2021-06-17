import { AppProps } from 'next/app';
import { wrapperStore } from '../redux/store/store';
import { ChakraProvider } from '@chakra-ui/react';

import { MobileFooter } from '../components/Footer/MobileFooter';
import { DesktopFooter } from '../components/Footer/DesktopFooter';
import { Header } from '../components/Header/Header';

import theme from '../styles/theme';
import '../styles/globals.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <DesktopFooter />
      <Component {...pageProps} />
      <MobileFooter />
    </ChakraProvider>
  );
};

export default wrapperStore.withRedux(MyApp);
