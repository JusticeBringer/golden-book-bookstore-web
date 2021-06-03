import { Flex } from '@chakra-ui/react';

import { LandscapeBookCard } from '../Reusable/LandscapeBookCard';

import { BookArrayType } from '../../util/types';

export const LandscapeBooksGroup: React.FC<BookArrayType> = (props: BookArrayType) => {
  const { books } = props;

  return (
    <Flex flexDirection={['column', 'row', 'row']} flexWrap='wrap'>
      {books.map(book => (
        <Flex key={book.id} className='card' mr='10px' pr='10px'>
          <Flex
            position='relative'
            text-align='center'
            mb='10px'
            mt='10px'
            borderRadius='15px'
            className={'cardDarkShadow'}
          >
            <LandscapeBookCard book={book} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default LandscapeBooksGroup;
