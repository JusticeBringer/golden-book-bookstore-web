import { Icon, Button, Text, Flex } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { FaShoppingCart } from 'react-icons/fa';

export const AddToCart: React.FC = () => {
  return (
    <Button
      ml={['6px']}
      py={['10px']}
      px='0px'
      bg={theme.colors.primaryGreen[100]}
      className='draw-border'
      _hover={{ bg: theme.colors.primaryGreen[100] }}
    >
      <Text display='flex' alignItems='center' px={['5px']}>
        Adaugă
      </Text>
      <Flex
        bg={theme.colors.primaryYellow[100]}
        borderTopLeftRadius={['10px']}
        borderBottomLeftRadius={['10px']}
        p='7px'
      >
        <Icon as={FaShoppingCart} aria-label={'Display cart'} boxSize={['20px']} />
      </Flex>
    </Button>
  );
};

export default AddToCart;
