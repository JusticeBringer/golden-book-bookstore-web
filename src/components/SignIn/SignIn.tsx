import { Flex } from '@chakra-ui/react';

import { SignInComp } from '../SubComponents/SignInComp';

export const SignIn: React.FC = () => {
  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column' mt={['10vh']}>
      <SignInComp />
    </Flex>
  );
};

export default SignIn;
