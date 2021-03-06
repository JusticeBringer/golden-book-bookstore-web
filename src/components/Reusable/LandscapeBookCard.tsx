import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';

import { Price } from '../SubComponents/Price';
import { DetailsBook } from '../SubComponents/DetailsBook';
import { ButtonDetails } from '../SubComponents/ButtonDetails';
import { AddToCart } from '../SubComponents/AddToCart';
import { MiddleTextBook } from '../SubComponents/MiddleTextBook';
import { LandscapeImageBook } from '../SubComponents/LandscapeImageBook';
import { RatingStarsBook } from '../SubComponents/RatingStarsBook';
import { AddRemoveFromCart } from '../SubComponents/AddRemoveFromCart';

import { nextRedirectPushBrowser, useWindowDimensions } from '../../util/helpers';
import { THEME_BREAKPOINTS } from '../../util/constants/constants.other';
import { theme } from '../../styles/theme';
import BookDocument from '../../database/models/book/book.interface';

type LandscapeBookCard = {
  book: BookDocument;
  userQty: number;
  disableNavigation?: boolean;
};

export const LandscapeBookCard: React.FC<LandscapeBookCard> = (props: LandscapeBookCard) => {
  const { userQty, disableNavigation } = props;
  const { title, author, image, description, rating, price, _id, quantity } = props.book;
  const { width } = useWindowDimensions();

  // if item qty is >= 1 -> show increment
  const booksIdsStore: string[] = useSelector((state: RootState) => state.shoppingCart.books?.ids);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // if no items in cart
    if (booksIdsStore.length === 0) {
      setIsInCart(false);
      return;
    }

    // get item position
    let i: number;
    for (i = 0; i < booksIdsStore.length; i++) {
      if (booksIdsStore[i] === _id) {
        setIsInCart(true);
        return;
      }
    }

    // item is not in cart, set to false
    setIsInCart(false);
    return;
  }, [booksIdsStore]);

  const handleOnClickBookCard = () => {
    nextRedirectPushBrowser(`/catalog/books/${_id}`);
  };

  return (
    <Flex
      p={['20px']}
      maxWidth={['80vw', '80vw', '80vw', '80vw', '80vw', '80vw', '70vw', '40vw']}
      borderRadius='10px'
      className={disableNavigation ? '' : 'draw-bottom-border-white-blue'}
      cursor={disableNavigation ? 'initial' : 'pointer'}
      onClick={disableNavigation ? null : handleOnClickBookCard}
    >
      <section>
        {width < THEME_BREAKPOINTS.md && (
          <Flex width='100%'>
            <Flex maxWidth={['60%', '50%']} alignItems='center'>
              <Flex ml={['5px']}>
                <LandscapeImageBook image={image} />
              </Flex>
            </Flex>
            <Flex ml={['10px']} maxWidth={['100%']}>
              <Flex flexDir='column' justifyContent='space-between'>
                <Flex flexDir='column'>
                  <MiddleTextBook
                    title={title}
                    author={author}
                    showAuthor={true}
                    showDescription={false}
                  />
                </Flex>
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
        )}
        {width >= THEME_BREAKPOINTS.md && width < THEME_BREAKPOINTS.md2 && (
          <Flex>
            <Flex alignItems='center'>
              <Flex ml={['5px']}>
                <LandscapeImageBook image={image} />
              </Flex>
            </Flex>
            <Flex ml={['10px']}>
              <Flex flexDir='column' justifyContent='space-between'>
                <Flex flexDir='column'>
                  <MiddleTextBook title={title} author={author} showAuthor={true} />
                </Flex>
                <Flex flexDir='column'>
                  <RatingStarsBook rating={rating} />
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
        )}
        {width >= THEME_BREAKPOINTS.md2 && width < THEME_BREAKPOINTS.lg && (
          <Flex>
            <Flex alignItems='center' maxWidth={['30%']}>
              <LandscapeImageBook image={image} />
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['30%']} justifyContent='space-between'>
              <Flex flexDir='column'>
                <MiddleTextBook title={title} />
              </Flex>
              <Flex flexDir='column'>
                <Price
                  price={price}
                  sizeFont={['16px']}
                  bottomBorder={[`3px solid ${theme.colors.primaryBlue[200]}`]}
                  bottomMargin={['20px']}
                />
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
            <Flex width={['40%']} ml={['20px']} flexDir='column' justifyContent='space-between'>
              <DetailsBook
                sizeFontBtDet={['15px']}
                book={props.book}
                rating={rating}
                showNrRec={false}
                bgClr={theme.colors.primaryBlue[100]}
                nameCssClass='draw-border-yellow-blue'
              />
            </Flex>
          </Flex>
        )}

        {width >= THEME_BREAKPOINTS.lg && width < THEME_BREAKPOINTS.xl3 && (
          <Flex>
            <Flex alignItems='center' maxWidth={['20%']}>
              <LandscapeImageBook image={image} />
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['50%']} justifyContent='space-between'>
              <Flex flexDir='column'>
                <MiddleTextBook title={title} description={description} showDescription={true} />
              </Flex>
              <Flex flexDir='row' justifyContent='space-between'>
                <Price
                  price={price}
                  bottomBorder={[`3px solid ${theme.colors.primaryBlue[200]}`]}
                />
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
            <Flex width={['30%']} ml={['20px']} flexDir='column' justifyContent='space-between'>
              <DetailsBook
                book={props.book}
                rating={rating}
                sizeFontBtDet={['15px']}
                bgClr={theme.colors.primaryBlue[100]}
              />
            </Flex>
          </Flex>
        )}
        {width >= THEME_BREAKPOINTS.xl3 && (
          <Flex>
            <Flex alignItems='center' maxWidth={['20%']}>
              <LandscapeImageBook image={image} />
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['50%']} justifyContent='space-between'>
              <Flex flexDir='column'>
                <MiddleTextBook title={title} description={description} showDescription={true} />
              </Flex>
              <Flex flexDir='row'>
                <Price
                  price={price}
                  bottomBorder={[`3px solid ${theme.colors.primaryBlue[200]}`]}
                />
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
            <Flex width={['30%']} ml={['20px']} flexDir='column' justifyContent='space-between'>
              <DetailsBook
                book={props.book}
                rating={rating}
                sizeFontBtDet={['15px']}
                bgClr={theme.colors.primaryBlue[100]}
              />
            </Flex>
          </Flex>
        )}
      </section>
    </Flex>
  );
};

export default LandscapeBookCard;
