import { Flex, Image, useDisclosure } from '@chakra-ui/react';
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
import { Loading } from '../Reusable/Loading';
import AddRemoveFromCart from '../SubComponents/AddRemoveFromCart';

type ProductCartBookProps = {
  book: BookDocument;
  userQty: number;
};

export const ProductCartBook: React.FC<ProductCartBookProps> = (props: ProductCartBookProps) => {
  const { book, userQty } = props;
  const { title, author, image, price, quantity, _id } = book;

  const isStoreUpdating = useSelector((state: RootState) => state.updatingStore);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isStoreUpdating === true) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isStoreUpdating]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Flex
          className='draw-bottom-border-white-blue'
          borderRadius='10px'
          w={['260px', '290px', '350px', '400px']}
        >
          <section>
            <Flex
              flexDir='row'
              py={['15px']}
              px={['5px', '15px']}
              justifyContent='space-between'
              alignContent='center'
            >
              <Image
                loading='eager'
                src={image}
                maxWidth={['160px', '180px', '210px']}
                maxHeight={['140px', '160px', '190px']}
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
                  <AddRemoveFromCart _id={_id} userQty={userQty} bookMaxQty={quantity} />
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
