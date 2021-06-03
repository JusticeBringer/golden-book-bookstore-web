import { Heading, Image, Flex } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';

import { theme } from '../../styles/theme';
import { BookType } from '../../util/types';

type LandscapeBookCard = {
  book: BookType;
};

export const LandscapeBookCard: React.FC<LandscapeBookCard> = (props: LandscapeBookCard) => {
  const { title, author, image } = props.book;

  return (
    <Flex p='8px' minWidth={['80vw', '25vw', '25vw']}>
      <Flex justifyContent='left' alignItems='center'>
        <Image src={image} width={75} height={70} minWidth={75} alt='nimic' borderRadius='15px' />
      </Flex>
      <Flex flexDirection='column' ml='20px' pt='10px'>
        <Flex>
          <Heading
            as='h2'
            fontSize={['14px', '18px', '21px']}
            color={theme.colors.primaryBlue[100]}
          >
            {title}
          </Heading>
        </Flex>
        <Flex flexDirection='row' mt='20px' justifyContent='space-between'>
          <Flex justifyContent='left' alignItems='center'>
            <FaUserCircle size='14px' />
            <Heading
              as='h3'
              ml='3px'
              fontSize={['12px', '14px', '18px']}
              color={theme.colors.primaryBlue[100]}
            >
              {author}
            </Heading>
          </Flex>

          <Flex ml='10px' justifyContent='right' alignItems='center'>
            <TimeIcon w={3} h={3} />
            <Heading
              as='h3'
              fontSize={['10px', '14px', '18px']}
              color={theme.colors.primaryBlue[100]}
              ml='2px'
            >
              10 min
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandscapeBookCard;
