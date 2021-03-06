import { Flex } from '@chakra-ui/react';

import { ProductCartBook } from '../Reusable/ProductCartBook';
import { BookDocument } from '../../database/models/book/book.interface';
import { qtysType } from '../../redux/reducers/reducers.types';
import { getUserQty } from '../../util/helpers';

type PortraitProductCartBooksProps = {
  books: BookDocument[];
  booksQtys: qtysType[];
};

export const PortraitProductCartBooks: React.FC<PortraitProductCartBooksProps> = (
  props: PortraitProductCartBooksProps
) => {
  const { books, booksQtys } = props;

  return (
    <Flex flexDirection={['column', 'row', 'row']} flexWrap='wrap'>
      {books.map(book => (
        <Flex key={book._id} className='card' pr={['', '', '', '', '5px', '10px', '15px', '20px']}>
          <Flex
            position='relative'
            text-align='center'
            mb='10px'
            mt='10px'
            borderRadius='15px'
            className={'cardDarkShadow'}
          >
            <ProductCartBook book={book} userQty={getUserQty(book._id, booksQtys)} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default PortraitProductCartBooks;
