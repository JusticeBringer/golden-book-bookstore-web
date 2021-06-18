import {
  Flex,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  substractFromCart,
  setExactValueToCart
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
import ModalProductDelete from './ModalProductDelete';

type ProductCartBookProps = {
  book: BookDocument;
  userQty: number;
};

export const ProductCartBook: React.FC<ProductCartBookProps> = (props: ProductCartBookProps) => {
  const { book, userQty } = props;

  const booksIdsStore: idsAndQtysType = useSelector((state: RootState) => state.shoppingCart.books);
  const isStoreUpdating = useSelector((state: RootState) => state.updatingStore);

  const { title, author, image, price, quantity, _id } = book;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isStoreUpdating === true) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isStoreUpdating]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleRemove = () => {
    // display modal
    onOpen();
  };

  useEffect(() => {
    setCookie(shoppingCartBooks, booksIdsStore, 180);
  }, [booksIdsStore]);

  const [itemQtySelectedInStore, setitemQtySelectedInStore] = useState(userQty);

  const handleQtyChange = (val: string) => {
    let inputQty = parseInt(val);

    // if user set a negative value
    if (inputQty < 0) {
      return;
    }

    // if user set the same input as before
    if (inputQty === itemQtySelectedInStore) {
      return;
    }

    // if user selected max value
    if (inputQty > quantity) {
      dispatch(setExactValueToCart(_id, quantity));
      setitemQtySelectedInStore(quantity);
      return;
    }

    // if user decremented
    if (inputQty < itemQtySelectedInStore) {
      // by 1
      if (itemQtySelectedInStore - inputQty === 1) {
        dispatch(substractFromCart(_id));
        setitemQtySelectedInStore(inputQty);
        return;
      }

      // by more
      dispatch(setExactValueToCart(_id, inputQty));
      setitemQtySelectedInStore(inputQty);
      return;
    }

    // user incremented
    if (inputQty - itemQtySelectedInStore === 1) {
      // by 1
      dispatch(addToCart(_id));
      setitemQtySelectedInStore(inputQty);
      return;
    }

    // by more
    dispatch(setExactValueToCart(_id, inputQty));
    setitemQtySelectedInStore(inputQty);
    return;
  };

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
                      keepWithinRange={true}
                      clampValueOnBlur={true}
                      maxW={['40px', '60px', '80px']}
                      mr={['5px']}
                      onChange={val => handleQtyChange(val)}
                      onClick={e => e.stopPropagation()}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <IconButton
                      bg='red.100'
                      _hover={{ bg: 'red.300' }}
                      icon={<DeleteIcon fontSize={['10px', '14px', '20px']} />}
                      aria-label='Delete item'
                      onClick={() => handleRemove()}
                    />
                    <ModalProductDelete _id={_id} isOpen={isOpen} onClose={onClose} />
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
