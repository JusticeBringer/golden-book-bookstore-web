import { Heading, Image, Flex, Text } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

import { theme } from '../../styles/theme';
import { BookType } from '../../util/types';
import { Details } from '../SubComponents/Details';

type LandscapeBookCard = {
  book: BookType;
};

export const LandscapeBookCard: React.FC<LandscapeBookCard> = (props: LandscapeBookCard) => {
  const { title, author, image, description, rating, publishingYear, price, reviews } = props.book;

  return (
    <Flex p={['20px']} minWidth={['80vw']} className='draw-border-container' borderRadius='10px'>
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
        alignContent='space-between'
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
        <Details />
      </Flex>
      <Flex width={['30%']} ml={['20px']} flexDir='column'>
        <Heading>Text</Heading>
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
            {reviews.length}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandscapeBookCard;
