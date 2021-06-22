import { Flex } from '@chakra-ui/react';

import { LandscapeBookCard } from '../Reusable/LandscapeBookCard';

import { BooksArrayType } from '../../util/types';
import { qtysType } from '../../redux/reducers/reducers.types';
import { getUserQty } from '../../util/helpers';

type LandscapeBooksGroupProps = {
  books: BooksArrayType;
  booksQtys: qtysType[];
};

export const LandscapeBooksGroup: React.FC<LandscapeBooksGroupProps> = (
  props: LandscapeBooksGroupProps
) => {
  const { books, booksQtys } = props;

  return (
    <Flex flexDirection={['column', 'row', 'row']} flexWrap='wrap'>
      {books.map(book => (
        <Flex key={book._id} className='card' pr={['', '', '', '', '', '', '', '20px']}>
          <Flex
            position='relative'
            text-align='center'
            mb='10px'
            mt='10px'
            borderRadius='15px'
            className={'cardDarkShadow'}
          >
            <LandscapeBookCard book={book} userQty={getUserQty(book._id, booksQtys)} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default LandscapeBooksGroup;
