import { Box, Flex } from '@chakra-ui/react';

import { Register } from '../../components/Register/Register';

type RegisterProps = {
  googleClientId: string;
};

const Index: React.FC<RegisterProps> = (props: RegisterProps) => {
  const { googleClientId } = props;

  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <Register googleClientId={googleClientId} />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
