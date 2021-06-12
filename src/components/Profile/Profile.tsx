import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from '../../redux/actions';

import { Flex, Heading, Button } from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import { RootState } from '../../redux/reducers';

export const Profile: React.FC = () => {
  const isLogged = useSelector((state: RootState) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <Flex justifyContent='center' alignItems='center' height='50vh' flexDirection='column'>
      <Heading fontSize='5vw' color={theme.colors.primaryBlack[800]}>
        Contul meu
        {isLogged ? (
          <Button onClick={() => dispatch(signOut())}>Deconectare</Button>
        ) : (
          <Button onClick={() => dispatch(signIn())}>Autentificare</Button>
        )}
      </Heading>
    </Flex>
  );
};

export default Profile;
