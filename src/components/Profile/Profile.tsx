import { Flex, Heading } from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import { currentMode } from '../../util/helpers';

export const Profile: React.FC = () => {
  return (
    <Flex justifyContent='center' alignItems='center' height='50vh' flexDirection='column'>
      <Heading fontSize='5vw' color={theme.colors.primaryBlue[currentMode()]}>
        Contul meu
      </Heading>
    </Flex>
  );
};

export default Profile;
