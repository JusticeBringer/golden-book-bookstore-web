import { Flex, Image } from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import { BookDocument } from '../../database/models/book/book.interface';

import { AddToCart } from '../SubComponents/AddToCart';
import { RatingStarsBook } from '../SubComponents/RatingStarsBook';
import { MiddleTextBook } from '../SubComponents/MiddleTextBook';
import Price from '../SubComponents/Price';

type PortraitBookCard = {
  book: BookDocument;
};

export const PortraitBookCard: React.FC<PortraitBookCard> = (props: PortraitBookCard) => {
  const { title, author, image, rating, price, _id } = props.book;

  return (
    <Flex
      className='draw-bottom-border-white-blue'
      borderRadius='10px'
      px={['5px', '5px', '5px', '15px']}
    >
      <section>
        <Flex
          flexDir='row'
          maxW={['300px', '400px', '500px', '600px']}
          py={['15px']}
          justifyContent='space-between'
          alignContent='center'
        >
          <Flex pl={['5px']}>
            <Image
              src={image}
              maxWidth={['100px', '120px', '140px', '160px', '180px', '210px']}
              maxHeight={['100px', '120px', '140px', '160px', '190px', '210px']}
              minWidth={75}
              minHeight={75}
              alt='nimic'
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
                <AddToCart
                  sizeFontText={['14px']}
                  bgClr={theme.colors.primaryBlue[100]}
                  nameCssClass='draw-border-yellow-blue'
                  _id={_id}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </section>
    </Flex>
  );
};

export default PortraitBookCard;
