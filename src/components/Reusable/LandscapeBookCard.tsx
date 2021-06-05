import { useEffect, useState } from 'react';

import { Heading, Image, Flex, Text, Stack } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

import { theme } from '../../styles/theme';
import { BookType } from '../../util/types';
import { Details } from '../SubComponents/Details';
import { AddToCart } from '../SubComponents/AddToCart';

type LandscapeBookCard = {
  book: BookType;
};

export const LandscapeBookCard: React.FC<LandscapeBookCard> = (props: LandscapeBookCard) => {
  const { title, author, image, description, rating, publishingYear, price, reviews } = props.book;
  const [userWidth, setUserWidth] = useState(0);

  useEffect(() => {
    setUserWidth(window.innerWidth);
  }, []);
  return (
    <section>
      {userWidth < 830 ? (
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
                    color={`${theme.colors.primaryBlack[900]}`}
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
                    <Flex justifyContent='center' justifyItems='center'>
                      <Details />
                    </Flex>
                  </Flex>
                </Stack>
              </Flex>
            </Flex>
          </section>
        </Flex>
      ) : (
        <Flex
          p={['20px']}
          minWidth={['80vw']}
          className='draw-border-container'
          borderRadius='10px'
        >
          <Flex justifyContent='left' alignItems='flex-start' width={['20%']}>
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
          <Flex
            flexDirection='column'
            ml='20px'
            pt='10px'
            width={['50%']}
            justifyContent='space-between'
          >
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
            <AddToCart />
          </Flex>
          <Flex width={['30%']} ml={['20px']} flexDir='column' justifyContent='space-between'>
            <Heading>Detalii</Heading>
            <Flex flexDir='row' alignItems='center'>
              <ReactStars
                size={20}
                activeColor={`${theme.colors.primaryYellow[500]}`}
                color={`${theme.colors.primaryBlack[900]}`}
                value={rating}
                edit={false}
                isHalf={true}
              />
              <Text ml={['5px']} fontWeight={[600]}>
                {reviews.length}&nbsp;recenzii
              </Text>
            </Flex>
            <Flex>
              <Text ml={['5px']} fontWeight={[400]}>
                Autor:
              </Text>
              <Text ml={['5px']} fontWeight={[600]}>
                {author}
              </Text>
            </Flex>
            <Flex>
              <Text ml={['5px']} fontWeight={[400]}>
                An apariție:
              </Text>
              <Text ml={['5px']} fontWeight={[600]}>
                {publishingYear}
              </Text>
            </Flex>
            <Flex>
              <Text ml={['5px']} fontWeight={[400]}>
                Preț:
              </Text>
              <Text ml={['5px']} fontWeight={[600]}>
                {price}&nbsp;lei
              </Text>
            </Flex>

            <Details />
          </Flex>
        </Flex>
      )}
    </section>
  );
};

export default LandscapeBookCard;
