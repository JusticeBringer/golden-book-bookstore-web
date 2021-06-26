import { GetStaticProps } from 'next';
import { Box, Flex } from '@chakra-ui/react';

import { Register } from '../../components/Register/Register';

type RegisterProps = {
  googleClientId: string;
  facebookAppId: string;
  registerApiUrl: string;
  googleRegistrationApiUrl: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const registerApiUrl = process.env.DOMAIN_URL_API + '/user/register/email';
  const googleRegistrationApiUrl = process.env.DOMAIN_URL_API + '/user/register/google';
  const facebookAppId = process.env.FACEBOOK_APP_ID;

  if (process.env.NODE_ENV !== 'production') {
    return {
      props: {
        googleClientId,
        facebookAppId,
        registerApiUrl,
        googleRegistrationApiUrl
      }
    };
  } else {
    return {
      props: {
        googleClientId,
        facebookAppId,
        registerApiUrl,
        googleRegistrationApiUrl
      }
    };
  }
};

const Index: React.FC<RegisterProps> = (props: RegisterProps) => {
  const { googleClientId, facebookAppId, registerApiUrl, googleRegistrationApiUrl } = props;

  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <Register
            googleClientId={googleClientId}
            facebookAppId={facebookAppId}
            registerApiUrl={registerApiUrl}
            googleRegistrationApiUrl={googleRegistrationApiUrl}
            isRegistration={true}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
