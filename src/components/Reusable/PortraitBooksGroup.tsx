import { Flex } from '@chakra-ui/react';

import { PortraitBookCard } from '../Reusable/PortraitBookCard';
import { BookDocument } from '../../database/models/book/book.interface';
import { getUserQty, useWindowDimensions } from '../../util/helpers';
import { qtysType } from '../../redux/reducers/reducers.types';

type PortraitBooksGroupProps = {
  books: BookDocument[];
  booksQtys: qtysType[];
};

export const PortraitBooksGroup: React.FC<PortraitBooksGroupProps> = (
  props: PortraitBooksGroupProps
) => {
  const { books, booksQtys } = props;
  const { width } = useWindowDimensions();

  return (
    <section
      className={
        width < 480 ? 'scrolling-wrapper-flexbox hideScrollBar' : 'scrolling-wrapper-flexbox'
      }
    >
      {/* Show scrolling bar only for devices with width > 480 px */}
      {books.map(book => (
        <Flex
          key={book._id}
          position='relative'
          text-align='center'
          mb='20px'
          mt='10px'
          mr={['10px', '20px', '30px']}
          borderRadius='15px'
          className='cardDarkShadow card'
        >
          <PortraitBookCard book={book} userQty={getUserQty(book._id, booksQtys)} />
        </Flex>
      ))}
    </section>
  );
};

export default PortraitBooksGroup;
