import { Flex } from '@chakra-ui/react';

import { SignInComp } from '../SubComponents/SignInComp';

type SignInProps = {
  googleClientId: string;
  signInApiUrl: string;
  isAuthentication: boolean;
  googleAuthenticationApiUrl: string;
};

export const SignIn: React.FC<SignInProps> = (props: SignInProps) => {
  const { googleClientId, signInApiUrl, isAuthentication, googleAuthenticationApiUrl } = props;
  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column' mt={['10vh']}>
      <SignInComp
        googleClientId={googleClientId}
        signInApiUrl={signInApiUrl}
        isAuthentication={isAuthentication}
        googleAuthenticationApiUrl={googleAuthenticationApiUrl}
      />
    </Flex>
  );
};

export default SignIn;
