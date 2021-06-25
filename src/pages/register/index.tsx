import { GetStaticProps } from 'next';
import { Box, Flex } from '@chakra-ui/react';

import { Register } from '../../components/Register/Register';

type RegisterProps = {
  googleClientId: string;
  registerApiUrl: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const registerApiUrl = process.env.DOMAIN_URL_API + '/user/register/email';

  if (process.env.NODE_ENV !== 'production') {
    return {
      props: {
        googleClientId,
        registerApiUrl
      }
    };
  } else {
    return {
      props: {
        googleClientId,
        registerApiUrl
      }
    };
  }
};

const Index: React.FC<RegisterProps> = (props: RegisterProps) => {
  const { googleClientId, registerApiUrl } = props;

  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <Register googleClientId={googleClientId} registerApiUrl={registerApiUrl} />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
