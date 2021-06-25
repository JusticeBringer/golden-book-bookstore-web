import { Flex } from '@chakra-ui/react';

import { RegisterComp } from '../SubComponents/RegisterComp';

type RegisterProps = {
  googleClientId: string;
  registerApiUrl: string;
};

export const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  const { googleClientId, registerApiUrl } = props;

  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column' mt={['5vh']}>
      <RegisterComp googleClientId={googleClientId} registerApiUrl={registerApiUrl} />
    </Flex>
  );
};

export default Register;
