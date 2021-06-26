import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { nextRedirectPushBrowser } from '../../util/helpers';

import { RegisterComp } from '../SubComponents/RegisterComp';

type RegisterProps = {
  googleClientId: string;
  registerApiUrl: string;
  googleRegistrationApiUrl: string;
  isRegistration: boolean;
};

export const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  const { googleClientId, registerApiUrl, googleRegistrationApiUrl, isRegistration } = props;

  const isAuthenticatedStore = useSelector((state: RootState) => state.authenticated);

  // show sign in form in not authenticated
  useEffect(() => {
    if (isAuthenticatedStore === false) {
      nextRedirectPushBrowser('/register');
    } else {
      nextRedirectPushBrowser('/profile');
    }
  }, []);

  useEffect(() => {
    if (isAuthenticatedStore === false) {
      nextRedirectPushBrowser('/register');
    } else {
      nextRedirectPushBrowser('/profile');
    }
  }, [isAuthenticatedStore]);
  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column' mt={['5vh']}>
      <RegisterComp
        googleClientId={googleClientId}
        registerApiUrl={registerApiUrl}
        googleRegistrationApiUrl={googleRegistrationApiUrl}
        isRegistration={isRegistration}
      />
    </Flex>
  );
};

export default Register;
