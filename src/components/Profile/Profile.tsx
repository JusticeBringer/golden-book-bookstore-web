import { useEffect, useState } from 'react';
import { Flex, Heading, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../redux/actions/authentication.action';
import { RootState } from '../../redux/reducers';

import { theme } from '../../styles/theme';
import { SignInComp } from '../SubComponents/SignInComp';
import { nextRedirectPush } from '../../util/helpers';

type ProfileProps = {
  googleClientId: string;
};

export const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  const { googleClientId } = props;

  const isAuthenticatedStore = useSelector((state: RootState) => state.authenticated);

  // show sign in form in not authenticated
  useEffect(() => {
    if (isAuthenticatedStore === false) {
      nextRedirectPush(null, '/signin');
    }
  }, []);

  useEffect(() => {
    if (isAuthenticatedStore === false) {
      nextRedirectPush(null, '/signin');
    }
  }, [isAuthenticatedStore]);

  const [isAuthenticatedState, setIsAuthenticatedState] = useState(false);

  useEffect(() => {
    if (isAuthenticatedStore === true) {
      setIsAuthenticatedState(true);
    } else {
      setIsAuthenticatedState(false);
    }
  }, [isAuthenticatedStore]);

  const dispatch = useDispatch();

  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column'>
      {isAuthenticatedState ? (
        <Flex flexDir='column'>
          <Heading fontSize='5vw' color={theme.colors.primaryBlack[800]}>
            Contul meu
          </Heading>
          <Button onClick={() => dispatch(signOut())}>Deconectare</Button>
        </Flex>
      ) : (
        <Flex mt={['10vh']}>
          <SignInComp googleClientId={googleClientId} />
        </Flex>
      )}
    </Flex>
  );
};

export default Profile;
