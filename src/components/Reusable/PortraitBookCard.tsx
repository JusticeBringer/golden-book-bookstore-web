import { useEffect, useState } from 'react';
import { Flex, Image } from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import { BookDocument } from '../../database/models/book/book.interface';

import { AddToCart } from '../SubComponents/AddToCart';
import { RatingStarsBook } from '../SubComponents/RatingStarsBook';
import { MiddleTextBook } from '../SubComponents/MiddleTextBook';
import Price from '../SubComponents/Price';
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { AddRemoveFromCart } from '../SubComponents/AddRemoveFromCart';
import { nextRedirectPushBrowser } from '../../util/helpers';

type PortraitBookCard = {
  book: BookDocument;
  userQty: number;
  disableNavigation?: boolean;
};

export const PortraitBookCard: React.FC<PortraitBookCard> = (props: PortraitBookCard) => {
  const { userQty, disableNavigation } = props;
  const { title, author, image, rating, price, _id, quantity } = props.book;

  // if item qty is >= 1 -> show increment
  const booksIdsStore: string[] = useSelector((state: RootState) => state.shoppingCart.books?.ids);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // if no items in cart
    if (booksIdsStore && booksIdsStore?.length === 0) {
      setIsInCart(false);
      return;
    }

    // get item position
    let i: number;
    for (i = 0; i < booksIdsStore?.length; i++) {
      if (booksIdsStore[i] === _id) {
        setIsInCart(true);
        return;
      }
    }

    // item is not in cart, set to false
    setIsInCart(false);
  }, [booksIdsStore]);

  const handleOnClickBookCard = () => {
    nextRedirectPushBrowser(`/catalog/books/${_id}`);
  };

  return (
    <Flex
      borderRadius='10px'
      px={['5px', '5px', '5px']}
      className={disableNavigation ? '' : 'draw-bottom-border-white-blue'}
      cursor={disableNavigation ? 'initial' : 'pointer'}
      onClick={disableNavigation ? null : handleOnClickBookCard}
    >
      <section>
        <Flex
          flexDir='row'
          py={['15px']}
          pl={['2px', '3px', '5px', '7px']}
          pr={['2px', '3px', '5px', '7px', '10px']}
          justifyContent='space-between'
          alignContent='center'
        >
          <Flex pl={['5px']}>
            <Image
              loading='eager'
              src={image}
              maxWidth={['100px', '120px', '140px', '160px', '180px', '210px']}
              maxHeight={['100px', '120px', '140px', '160px', '190px', '210px']}
              minWidth={['50px']}
              minHeight={['50px']}
              alt='image-picture'
              borderRadius='15px'
            />
          </Flex>
          <Flex ml={['10px']} flexDir='column' justifyContent='space-between'>
            <Flex flexDir='column'>
              <MiddleTextBook title={title} author={author} showAuthor={true} />
            </Flex>

            <RatingStarsBook rating={rating} />
            <Flex
              flexDir='row'
              justifyContent='space-between'
              justifyItems='center'
              alignContent='center'
              alignItems='flex-end'
            >
              <Price price={price} bottomBorder={[`3px solid ${theme.colors.primaryBlue[200]}`]} />
              <Flex justifyContent='center' justifyItems='center'>
                {isInCart ? (
                  <AddRemoveFromCart _id={_id} bookMaxQty={quantity} userQty={userQty} />
                ) : (
                  <AddToCart
                    sizeFontText={['14px']}
                    bgClr={theme.colors.primaryBlue[100]}
                    nameCssClass='draw-border-yellow-blue'
                    _id={_id}
                  />
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </section>
    </Flex>
  );
};

export default PortraitBookCard;
