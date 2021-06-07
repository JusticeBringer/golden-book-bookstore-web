import { Heading, Stack, Flex, Image, Text } from '@chakra-ui/react';
import ReactStars from 'react-rating-stars-component';

import { theme } from '../../styles/theme';
import { BookType } from '../../util/types';

import { AddToCart } from '../SubComponents/AddToCart';
import Price from '../SubComponents/Price';
type PortraitBookCard = {
  book: BookType;
};

export const PortraitBookCard: React.FC<PortraitBookCard> = (props: PortraitBookCard) => {
  const { title, author, image, rating, price } = props.book;

  return (
    <Flex className='draw-border-container' borderRadius='10px'>
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
          <Flex ml={['10px']}>
            <Stack dir='vertical'>
              <Flex flexDir='column'>
                <Heading
                  as='h3'
                  fontSize={['20px']}
                  lineHeight={['20px']}
                  fontWeight={['500']}
                  mb={['7px']}
                >
                  {title}
                </Heading>
                <Heading as='h4' fontSize={['16px']} lineHeight={['20px']} fontWeight={['300']}>
                  {author}
                </Heading>
              </Flex>

              <ReactStars
                size={20}
                activeColor={`${theme.colors.primaryYellow[500]}`}
                color={`${theme.colors.primaryBlack[400]}`}
                value={rating}
                edit={false}
                isHalf={true}
              />
              <Flex
                flexDir='row'
                justifyContent='space-between'
                justifyItems='center'
                alignContent='center'
                alignItems='flex-end'
              >
                <Price price={price} />
                <Flex justifyContent='center' justifyItems='center'>
                  <AddToCart />
                </Flex>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </section>
    </Flex>
  );
};

export default PortraitBookCard;
