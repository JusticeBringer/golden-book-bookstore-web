import { useDispatch } from 'react-redux';
import { Icon, Button, Text, Flex } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { FaShoppingCart } from 'react-icons/fa';
import { addToCart } from '../../redux/actions/shoppingCart.action';

type AddToCartProps = {
  _id: string;
  bgClr?: string;
  nameCssClass?: string;
  sizeFontText?: string[];
};

export const AddToCart: React.FC<AddToCartProps> = (props: AddToCartProps) => {
  const { sizeFontText, nameCssClass, bgClr, _id } = props;

  const dispatch = useDispatch();
  return (
    <Button
      py={['10px']}
      px='0px'
      bg={bgClr ?? theme.colors.primaryGreen[100]}
      className={nameCssClass ?? 'draw-border-yellow-green'}
      _hover={{ bg: bgClr ?? theme.colors.primaryGreen[100] }}
      width='fit-content'
      onClick={() => dispatch(addToCart(_id))}
    >
      <Text display='flex' alignItems='center' fontSize={sizeFontText ?? ['15px']} px={['5px']}>
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
