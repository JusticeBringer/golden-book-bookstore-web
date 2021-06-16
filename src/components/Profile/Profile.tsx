import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

import { Flex, Heading, Button } from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import SignInRegister from '../SubComponents/SignInRegister';

export const Profile: React.FC = () => {
  const isLogged = useSelector((state: RootState) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <Flex justifyContent='center' alignItems='center' flexDirection='column'>
      {isLogged ? (
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
