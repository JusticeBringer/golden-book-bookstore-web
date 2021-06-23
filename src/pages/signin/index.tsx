import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { SignIn } from '../../components/SignIn/SignIn';

export const getStaticProps: GetStaticProps = async () => {
  // For debugging purposes
  // console.log(process.env);

  if (process.env.NODE_ENV !== 'production') {
    const googleClientId = process.env.GOOGLE_CLIENT_ID;
    // console.log('this is: ', googleClientId);

    return {
      props: {
        googleClientId
      }
    };
  } else {
  }
};

type SignInProps = {
  googleClientId: string;
};

const Index: React.FC<SignInProps> = (props: SignInProps) => {
  const { googleClientId } = props;

  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <SignIn googleClientId={googleClientId} />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
