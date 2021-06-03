import { Heading, Stack, Flex, Image, Text, Button, IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

import { theme } from '../../styles/theme';
import { BookType } from '../../util/types';

type PortraitBookCard = {
  book: BookType;
};

export const PortraitBookCard: React.FC<PortraitBookCard> = (props: PortraitBookCard) => {
  const { title, author, image, rating, price } = props.book;

  return (
    <section>
      <Flex flexDir='row' maxW={[280]} py={['15px']} px={['5px']} justifyContent='space-between'>
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
              color={`${theme.colors.primaryBlack[100]}`}
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
              <Flex>
                <Text
                  borderRadius={['5px']}
                  display='flex'
                  alignItems='center'
                  borderBottom={[`3px solid ${theme.colors.primaryGreen[100]}`]}
                  fontSize={['18px']}
                >
                  {price}
                  &nbsp;lei
                </Text>
              </Flex>
              <Flex justifyContent='center' justifyItems='center'>
                <Button ml={['6px']} py={['10px']} px='0px' bg={theme.colors.primaryYellow[100]}>
                  <Text display='flex' alignItems='center' px={['3px']}>
                    Adaugă
                  </Text>
                  <IconButton
                    mr={['0px']}
                    icon={<FaShoppingCart fontSize={'20px'} />}
                    aria-label={'Display cart'}
                    borderTopLeftRadius={['20px']}
                    borderBottomLeftRadius={['20px']}
                  />
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </section>
  );
};

export default PortraitBookCard;
