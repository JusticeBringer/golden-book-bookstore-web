import { Flex } from '@chakra-ui/react';

import { SignInComp } from '../SubComponents/SignInComp';

type SignInProps = {
  googleClientId: string;
  facebookAppId: string;
  signInApiUrl: string;
  isAuthentication: boolean;
  googleAuthenticationApiUrl: string;
};

export const SignIn: React.FC<SignInProps> = (props: SignInProps) => {
  const {
    googleClientId,
    facebookAppId,
    signInApiUrl,
    isAuthentication,
    googleAuthenticationApiUrl
  } = props;
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      mt={['2vh', '4vh', '5vh', '7vh', '10vh']}
    >
      <SignInComp
        googleClientId={googleClientId}
        facebookAppId={facebookAppId}
        signInApiUrl={signInApiUrl}
        isAuthentication={isAuthentication}
        googleAuthenticationApiUrl={googleAuthenticationApiUrl}
      />
    </Flex>
  );
};

export default SignIn;
