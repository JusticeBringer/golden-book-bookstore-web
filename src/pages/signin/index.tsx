import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { SignIn } from '../../components/SignIn/SignIn';

export const getStaticProps: GetStaticProps = async () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const signInApiUrl = process.env.DOMAIN_URL_API + '/user/login';
  const googleAuthenticationApiUrl = process.env.DOMAIN_URL_API + '/user/login/google';

  if (process.env.NODE_ENV !== 'production') {
    return {
      props: {
        googleClientId,
        signInApiUrl,
        googleAuthenticationApiUrl
      }
    };
  } else {
    return {
      props: {
        googleClientId,
        signInApiUrl,
        googleAuthenticationApiUrl
      }
    };
  }
};

type SignInProps = {
  googleClientId: string;
  signInApiUrl: string;
  googleAuthenticationApiUrl: string;
};

const Index: React.FC<SignInProps> = (props: SignInProps) => {
  const { googleClientId, signInApiUrl, googleAuthenticationApiUrl } = props;

  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <SignIn
            googleClientId={googleClientId}
            signInApiUrl={signInApiUrl}
            googleAuthenticationApiUrl={googleAuthenticationApiUrl}
            isAuthentication={true}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
