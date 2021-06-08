import { Heading, Flex, Image } from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import { BookType } from '../../util/types';

import { AddToCart } from '../SubComponents/AddToCart';
import { RatingStarsBook } from '../SubComponents/RatingStarsBook';
import { MiddleTextBook } from '../SubComponents/MiddleTextBook';
import Price from '../SubComponents/Price';

type PortraitBookCard = {
  book: BookType;
};

export const PortraitBookCard: React.FC<PortraitBookCard> = (props: PortraitBookCard) => {
  const { title, author, image, rating, price } = props.book;

  return (
    <Flex className='draw-border-yellow-blue' borderRadius='10px'>
      <section>
        <Flex
          flexDir='row'
          maxW={[280]}
          py={['15px']}
          px={['5px']}
          justifyContent='space-between'
          alignContent='center'
        >
          <Flex ml={['5px']}>
            <Image src={image} width={[160]} height={[160]} alt='nimic' borderRadius='15px' />
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
