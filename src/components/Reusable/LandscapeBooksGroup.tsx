import { Flex } from '@chakra-ui/react';

import { LandscapeBookCard } from '../Reusable/LandscapeBookCard';

import { BooksArrayType } from '../../util/types';

type LandscapeBooksGroupProps = {
  books: BooksArrayType;
};

export const LandscapeBooksGroup: React.FC<LandscapeBooksGroupProps> = (
  props: LandscapeBooksGroupProps
) => {
  const { books } = props;

  return (
    <Flex flexDirection={['column', 'row', 'row']} flexWrap='wrap'>
      {books.map(book => (
        <Flex key={book.id} className='card' pr={['', '', '', '', '', '', '', '20px']}>
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
