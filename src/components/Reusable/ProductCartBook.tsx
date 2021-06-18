import {
  Flex,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  substractFromCart,
  removeFromCart
} from '../../redux/actions/shoppingCart.action';

import { theme } from '../../styles/theme';
import { BookDocument } from '../../database/models/book/book.interface';
import { Price } from '../SubComponents/Price';
import { MiddleTextBook } from '../SubComponents/MiddleTextBook';
import { useEffect, useState } from 'react';
import { RootState } from '../../redux/reducers';
import { idsAndQtysType } from '../../redux/reducers/reducers.types';
import { setCookie } from '../../util/helpers';
import { shoppingCartBooks } from '../../util/constants/constants.cookies';
import { Loading } from '../Reusable/Loading';

type ProductCartBookProps = {
  book: BookDocument;
  userQty: number;
};

export const ProductCartBook: React.FC<ProductCartBookProps> = (props: ProductCartBookProps) => {
  const { book, userQty } = props;

  const booksIdsStore: idsAndQtysType = useSelector((state: RootState) => state.shoppingCart.books);

  const { title, author, image, price, quantity, _id } = book;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleIncrement = () => {
    dispatch(addToCart(_id));
  };

  const handleDecrement = () => {
    dispatch(substractFromCart(_id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(_id));
  };

  useEffect(() => {
    setCookie(shoppingCartBooks, booksIdsStore, 180);
  }, [booksIdsStore]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Flex className='draw-bottom-border-white-blue' borderRadius='10px' maxW={['500px']}>
          <section>
            <Flex
              flexDir='row'
              py={['15px']}
              px={['5px', '15px']}
              justifyContent='space-between'
              alignContent='center'
            >
              <Image
                src={image}
                maxWidth={['160px', '180px', '210px', '260px']}
                maxHeight={['140px', '160px', '190px', '240px']}
                minWidth={75}
                minHeight={75}
                alt='nimic'
                borderRadius='15px'
              />
              <Flex ml={['10px']} flexDir='column' justifyContent='space-between'>
                <Flex flexDir='column'>
                  <MiddleTextBook title={title} author={author} showAuthor={true} />
                </Flex>
                <Flex flexDir='row' justifyContent='space-between' alignItems='flex-end'>
                  <Price
                    price={price}
                    bottomBorder={[`3px solid ${theme.colors.primaryBlue[200]}`]}
                  />
                  <Flex>
                    <NumberInput
                      defaultValue={userQty}
                      max={quantity}
                      min={1}
                      maxW={['40px', '60px', '80px']}
                      mr={['5px']}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper onClick={() => handleIncrement()} />
                        <NumberDecrementStepper onClick={() => handleDecrement()} />
                      </NumberInputStepper>
                    </NumberInput>
                    <IconButton
                      bg='red.100'
                      _hover={{ bg: 'red.300' }}
                      icon={<DeleteIcon fontSize={['10px', '14px', '20px']} />}
                      aria-label='Delete item'
                      onClick={() => handleRemove()}
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </section>
        </Flex>
      )}
    </>
  );
};

export default ProductCartBook;
