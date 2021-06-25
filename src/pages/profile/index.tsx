import { GetStaticProps } from 'next';
import { Box, Flex } from '@chakra-ui/react';

import Profile from '../../components/Profile/Profile';

type ProfileProps = {
  googleClientId: string;
};

export const getStaticProps: GetStaticProps = async () => {
  // For debugging purposes
  // console.log(process.env);
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  if (process.env.NODE_ENV !== 'production') {
    return {
      props: {
        googleClientId
      }
    };
  } else {
    return {
      props: {
        googleClientId
      }
    };
  }
};

const Index: React.FC<ProfileProps> = (props: ProfileProps) => {
  const { googleClientId } = props;

  return (
    <>
      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box width={'70%'}>
          <Profile googleClientId={googleClientId} />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
