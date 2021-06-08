import { Flex, Heading } from '@chakra-ui/react';

import { theme } from '../../styles/theme';

export const Profile: React.FC = () => {
  return (
    <Flex justifyContent='center' alignItems='center' height='50vh' flexDirection='column'>
      <Heading fontSize='5vw' color={theme.colors.primaryBlack[800]}>
        Contul meu
      </Heading>
    </Flex>
  );
};

export default Profile;
