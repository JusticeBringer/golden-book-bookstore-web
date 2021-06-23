import { Box, Flex } from '@chakra-ui/react';

import { SignIn } from '../../components/SignIn/SignIn';

const Index: React.FC = () => {
  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <SignIn />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
