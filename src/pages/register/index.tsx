import { Box, Flex } from '@chakra-ui/react';

import { Register } from '../../components/Register/Register';

const Index: React.FC = () => {
  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <Register />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
