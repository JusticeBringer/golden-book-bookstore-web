import { Flex } from '@chakra-ui/react';

import { RegisterComp } from '../SubComponents/RegisterComp';

type RegisterProps = {
  googleClientId: string;
};

export const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  const { googleClientId } = props;

  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column' mt={['5vh']}>
      <RegisterComp googleClientId={googleClientId} />
    </Flex>
  );
};

export default Register;
