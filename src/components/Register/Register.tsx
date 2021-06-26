import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { nextRedirectPushBrowser } from '../../util/helpers';

import { RegisterComp } from '../SubComponents/RegisterComp';

type RegisterProps = {
  googleClientId: string;
  facebookAppId: string;
  registerApiUrl: string;
  googleRegistrationApiUrl: string;
  isRegistration: boolean;
};

export const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  const {
    googleClientId,
    facebookAppId,
    registerApiUrl,
    googleRegistrationApiUrl,
    isRegistration
  } = props;

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
    <Flex
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      mt={['2vh', '2vh', '3vh', '4vh', '5vh']}
    >
      <RegisterComp
        googleClientId={googleClientId}
        facebookAppId={facebookAppId}
        registerApiUrl={registerApiUrl}
        googleRegistrationApiUrl={googleRegistrationApiUrl}
        isRegistration={isRegistration}
      />
    </Flex>
  );
};

export default Register;
