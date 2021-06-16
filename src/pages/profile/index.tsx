import { Box, Flex } from '@chakra-ui/react';

import Profile from '../../components/Profile/Profile';

const Index: React.FC = () => {
  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <Profile />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
