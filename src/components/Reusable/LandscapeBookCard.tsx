import { Flex } from '@chakra-ui/react';

import { Price } from '../SubComponents/Price';
import { DetailsBook } from '../SubComponents/DetailsBook';
import { ButtonDetails } from '../SubComponents/ButtonDetails';
import { AddToCart } from '../SubComponents/AddToCart';
import { MiddleTextBook } from '../SubComponents/MiddleTextBook';
import { LandscapeImageBook } from '../SubComponents/LandscapeImageBook';
import { RatingStarsBook } from '../SubComponents/RatingStarsBook';

import { useWindowDimensions } from '../../util/helpers';
import { THEME_BREAKPOINTS } from '../../util/constants/constants.other';
import { BookType } from '../../util/types';
import { theme } from '../../styles/theme';

type LandscapeBookCard = {
  book: BookType;
};

export const LandscapeBookCard: React.FC<LandscapeBookCard> = (props: LandscapeBookCard) => {
  const { title, author, image, description, rating, price } = props.book;
  const { width } = useWindowDimensions();

  return (
    <Flex
      p={['20px']}
      maxWidth={['80vw', '80vw', '80vw', '80vw', '80vw', '80vw', '70vw', '40vw']}
      className='draw-bottom-border-yellow-blue'
      borderRadius='10px'
    >
      <section>
        {width < THEME_BREAKPOINTS.md && (
          <Flex width='100%'>
            <Flex maxWidth={['60%', '50%']} maxHeight={['50%']} alignItems='center'>
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
                <ButtonDetails
                  sizeFontBtDet={['12px']}
                  bgClr={theme.colors.primaryBlue[100]}
                  nameCssClass='draw-border-yellow-blue'
                />
              </Flex>
            </Flex>
          </Flex>
        )}
        {width >= THEME_BREAKPOINTS.md && width < THEME_BREAKPOINTS.md2 && (
          <Flex>
            <Flex alignItems='center' maxWidth={['30%']} maxHeight={['30%']}>
              <Flex ml={['5px']}>
                <LandscapeImageBook image={image} />
              </Flex>
            </Flex>
            <Flex ml={['10px']} width={['60%']}>
              <Flex flexDir='column' justifyContent='space-between'>
                <Flex flexDir='column'>
                  <MiddleTextBook title={title} author={author} showAuthor={true} />
                </Flex>
                <Flex flexDir='column'>
                  <RatingStarsBook rating={rating} />
                  <ButtonDetails
                    sizeFontBtDet={['15px']}
                    bgClr={theme.colors.primaryBlue[100]}
                    nameCssClass='draw-border-yellow-blue'
                  />
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
              <Flex flexDir='row'>
                <Price
                  price={price}
                  sizeFont={['16px']}
                  bottomBorder={[`3px solid ${theme.colors.primaryBlue[200]}`]}
                />
                <AddToCart
                  sizeFontText={['14px']}
                  bgClr={theme.colors.primaryBlue[100]}
                  nameCssClass='draw-border-yellow-blue'
                />
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
              <Flex flexDir='row'>
                <Price
                  price={price}
                  bottomBorder={[`3px solid ${theme.colors.primaryBlue[200]}`]}
                />
                <AddToCart
                  bgClr={theme.colors.primaryBlue[100]}
                  nameCssClass='draw-border-yellow-blue'
                />
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
                <AddToCart
                  bgClr={theme.colors.primaryBlue[100]}
                  nameCssClass='draw-border-yellow-blue'
                />
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
