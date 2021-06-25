import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { SignIn } from '../../components/SignIn/SignIn';

export const getStaticProps: GetStaticProps = async () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const signInApiUrl = process.env.DOMAIN_URL_API + '/user/login';

  if (process.env.NODE_ENV !== 'production') {
    return {
      props: {
        googleClientId,
        signInApiUrl
      }
    };
  } else {
    return {
      props: {
        googleClientId,
        signInApiUrl
      }
    };
  }
};

type SignInProps = {
  googleClientId: string;
  signInApiUrl: string;
};

const Index: React.FC<SignInProps> = (props: SignInProps) => {
  const { googleClientId, signInApiUrl } = props;

  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <SignIn googleClientId={googleClientId} signInApiUrl={signInApiUrl} />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
