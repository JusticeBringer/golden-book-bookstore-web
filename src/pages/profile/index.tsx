import { Box, Flex } from '@chakra-ui/react';

import { MobileFooter } from '../../components/Footer/MobileFooter';
import { DesktopFooter } from '../../components/Footer/DesktopFooter';
import { Header } from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <DesktopFooter />

      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <Profile />
        </Box>
      </Flex>

      <MobileFooter />
    </>
  );
};

export default Index;
