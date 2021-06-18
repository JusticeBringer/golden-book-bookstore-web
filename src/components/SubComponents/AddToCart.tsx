import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Icon, Button, Text, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

import { theme } from '../../styles/theme';
import { addToCart } from '../../redux/actions/shoppingCart.action';
import { setCookie } from '../../util/helpers';
import { shoppingCartBooks } from '../../util/constants/constants.cookies';
import { idsAndQtysType } from '../../redux/reducers/reducers.types';

type AddToCartProps = {
  _id: string;
  bgClr?: string;
  nameCssClass?: string;
  sizeFontText?: string[];
};

export const AddToCart: React.FC<AddToCartProps> = (props: AddToCartProps) => {
  const { sizeFontText, nameCssClass, bgClr, _id } = props;
  const booksIdsStore: idsAndQtysType = useSelector((state: RootState) => state.shoppingCart.books);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(addToCart(_id));
  };

  useEffect(() => {
    setCookie(shoppingCartBooks, booksIdsStore);
  }, [booksIdsStore]);

  return (
    <Button
      py={['10px']}
      px='0px'
      bg={bgClr ?? theme.colors.primaryGreen[100]}
      className={nameCssClass ?? 'draw-border-yellow-green'}
      _hover={{ bg: bgClr ?? theme.colors.primaryGreen[100] }}
      width='fit-content'
      onClick={() => handleOnClick()}
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
