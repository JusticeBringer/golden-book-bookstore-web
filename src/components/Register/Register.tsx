import { Flex } from '@chakra-ui/react';

import { RegisterComp } from '../SubComponents/RegisterComp';

export const Register: React.FC = () => {
  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column' mt={['5vh']}>
      <RegisterComp />
    </Flex>
  );
};

export default Register;
