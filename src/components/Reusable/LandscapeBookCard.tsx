import { useEffect, useState } from 'react';
import { Heading, Image, Flex, Text, Stack, Box } from '@chakra-ui/react';
import ReactStars from 'react-rating-stars-component';

import { Price } from '../SubComponents/Price';
import { Details } from '../SubComponents/Details';
import { ButtonDetails } from '../SubComponents/ButtonDetails';
import { AddToCart } from '../SubComponents/AddToCart';

import { useWindowDimensions } from '../../util/helpers';
import { THEME_BREAKPOINTS } from '../../util/constants';
import { BookType } from '../../util/types';
import { theme } from '../../styles/theme';

type LandscapeBookCard = {
  book: BookType;
};

export const LandscapeBookCard: React.FC<LandscapeBookCard> = (props: LandscapeBookCard) => {
  const { title, author, image, description, rating, price } = props.book;
  const { height, width } = useWindowDimensions();

  return (
    <Flex p={['20px']} width={['80vw']} className='draw-border-container' borderRadius='10px'>
      <section>
        {width < THEME_BREAKPOINTS.md && (
          <Flex width='100%'>
            <Flex maxWidth={['60%', '50%']} maxHeight={['50%']} alignItems='center'>
              <Flex ml={['5px']}>
                <Image src={image} width={[100]} height={[140]} alt='nimic' borderRadius='10px' />
              </Flex>
            </Flex>
            <Flex ml={['10px']} maxWidth={['100%']}>
              <Flex flexDir='column' justifyContent='space-between'>
                <Flex flexDir='column'>
                  <Heading
                    as='h3'
                    fontSize={['16px']}
                    lineHeight={['20px']}
                    fontWeight={['500']}
                    mb={['7px']}
                  >
                    {title}
                  </Heading>
                  <Text fontSize={['14px']} lineHeight={['20px']} fontWeight={['300']}>
                    {author}
                  </Text>
                </Flex>
                <ButtonDetails sizeFontBtDet={['12px']} />
              </Flex>
            </Flex>
          </Flex>
        )}
        {width >= THEME_BREAKPOINTS.md && width < THEME_BREAKPOINTS.md2 && (
          <Flex>
            <Flex alignItems='center' maxWidth={['30%']} maxHeight={['30%']}>
              <Flex ml={['5px']}>
                <Image src={image} width={[140]} height={[180]} alt='nimic' borderRadius='10px' />
              </Flex>
            </Flex>
            <Flex ml={['10px']} width={['60%']}>
              <Flex flexDir='column' justifyContent='space-between'>
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
                  <Text fontSize={['16px']} lineHeight={['20px']} fontWeight={['300']}>
                    {author}
                  </Text>
                </Flex>
                <Flex flexDir='column'>
                  <ReactStars
                    size={20}
                    activeColor={`${theme.colors.primaryYellow[500]}`}
                    color={`${theme.colors.primaryBlack[900]}`}
                    value={rating}
                    edit={false}
                    isHalf={true}
                  />
                  <ButtonDetails sizeFontBtDet={['15px']} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )}
        {width >= THEME_BREAKPOINTS.md2 && width < THEME_BREAKPOINTS.lg && (
          <Flex>
            <Flex alignItems='center' maxWidth={['30%']}>
              <Image
                src={image}
                width={160}
                height={215}
                minWidth={75}
                minHeight={75}
                alt='nimic'
                borderRadius='15px'
              />
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['30%']} justifyContent='space-between'>
              <Flex flexDir='column'>
                <Heading
                  as='h2'
                  fontSize={['14px', '18px', '21px']}
                  color={theme.colors.primaryBlack[900]}
                >
                  {title}
                </Heading>
              </Flex>
              <Flex flexDir='row'>
                <Price price={price} sizeFont={['16px']} />
                <AddToCart sizeFontText={['14px']} />
              </Flex>
            </Flex>
            <Flex width={['40%']} ml={['20px']} flexDir='column' justifyContent='space-between'>
              <Details
                sizeFontBtDet={['15px']}
                book={props.book}
                rating={rating}
                showNrRec={false}
              />
            </Flex>
          </Flex>
        )}

        {width >= THEME_BREAKPOINTS.lg && (
          <Flex>
            <Flex alignItems='center' maxWidth={['20%']}>
              <Image
                src={image}
                width={150}
                height={220}
                minWidth={75}
                minHeight={75}
                alt='nimic'
                borderRadius='15px'
              />
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['50%']} justifyContent='space-between'>
              <Flex flexDir='column'>
                <Heading
                  as='h2'
                  fontSize={['14px', '18px', '21px']}
                  color={theme.colors.primaryBlack[900]}
                >
                  {title}
                </Heading>
                <Text
                  mt={['10px']}
                  fontSize={['12px', '14px', '18px']}
                  color={theme.colors.primaryBlack[800]}
                >
                  {description}
                </Text>
              </Flex>
              <Flex flexDir='row'>
                <Price price={price} />
                <AddToCart />
              </Flex>
            </Flex>
            <Flex width={['30%']} ml={['20px']} flexDir='column' justifyContent='space-between'>
              <Details book={props.book} rating={rating} sizeFontBtDet={['15px']} />
            </Flex>
          </Flex>
        )}
      </section>
    </Flex>
  );
};

export default LandscapeBookCard;
