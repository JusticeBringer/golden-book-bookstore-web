import { Flex } from '@chakra-ui/react';

import { ProductCartBook } from '../Reusable/ProductCartBook';
import { BookDocument } from '../../database/models/book/book.interface';
import { qtysType } from '../../redux/reducers/reducers.types';

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
      {books.map((book, index) => (
        <Flex key={book._id} className='card' pr={['', '', '', '', '', '', '', '20px']}>
          <Flex
            position='relative'
            text-align='center'
            mb='10px'
            mt='10px'
            borderRadius='15px'
            className={'cardDarkShadow'}
          >
            <ProductCartBook book={book} userQty={booksQtys[index]?.qty ?? 1} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default PortraitProductCartBooks;
