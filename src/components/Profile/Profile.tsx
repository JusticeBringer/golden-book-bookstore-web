import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/authentication.action';
import { RootState } from '../../redux/reducers';

import { Flex, Heading, Button } from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import SignInRegister from '../SubComponents/SignInRegister';

export const Profile: React.FC = () => {
  const isAuthenticatedStore = useSelector((state: RootState) => state.authenticated);
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
        <Flex>
          <SignInRegister />
        </Flex>
      )}
    </Flex>
  );
};

export default Profile;
