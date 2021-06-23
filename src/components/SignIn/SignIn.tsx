import { Flex } from '@chakra-ui/react';

import { SignInComp } from '../SubComponents/SignInComp';

type SignInProps = {
  googleClientId: string;
};

export const SignIn: React.FC<SignInProps> = (props: SignInProps) => {
  const { googleClientId } = props;
  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column' mt={['10vh']}>
      <SignInComp googleClientId={googleClientId} />
    </Flex>
  );
};

export default SignIn;
