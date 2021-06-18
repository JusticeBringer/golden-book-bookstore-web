import { Flex } from '@chakra-ui/react';

import { ProductCartBook } from '../Reusable/ProductCartBook';

import { BooksArrayType } from '../../util/types';

type PortraitProductCartBooksProps = {
  books: BooksArrayType;
};

export const PortraitProductCartBooks: React.FC<PortraitProductCartBooksProps> = (
  props: PortraitProductCartBooksProps
) => {
  const { books } = props;

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
            <ProductCartBook book={book} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default PortraitProductCartBooks;
