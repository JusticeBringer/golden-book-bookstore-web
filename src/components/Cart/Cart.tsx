import { Flex, Heading } from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import { currentMode } from '../../util/helpers';

export const Cart: React.FC = () => {
  return (
    <Flex justifyContent='center' alignItems='center' height='50vh' flexDirection='column'>
      <Heading fontSize='5vw' color={theme.colors.primaryBlue[currentMode()]}>
        Coșul meu
      </Heading>
    </Flex>
  );
};

export default Cart;
