import { Box, Flex } from '@chakra-ui/react';
import Cart from '../../components/Cart/Cart';

const Index: React.FC = () => {
  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <Cart />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
