import { Box, Flex } from '@chakra-ui/react';

import { MobileFooter } from '../../components/Footer/MobileFooter';
import { DesktopFooter } from '../../components/Footer/DesktopFooter';
import { Header } from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';

const Index: React.FC = () => {
  return (
    <>
      <Header showSearchBar={false} />
      <DesktopFooter />

      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <Cart />
        </Box>
      </Flex>

      <MobileFooter />
    </>
  );
};

export default Index;
