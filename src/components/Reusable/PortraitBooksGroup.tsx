import { Flex } from '@chakra-ui/react';

import { PortraitBookCard } from '../Reusable/PortraitBookCard';

import { BookDocument } from '../../database/models/book/book.interface';
import { useWindowDimensions } from '../../util/helpers';

type PortraitBooksGroupProps = {
  books: BookDocument[];
};

export const PortraitBooksGroup: React.FC<PortraitBooksGroupProps> = (
  props: PortraitBooksGroupProps
) => {
  const { books } = props;
  const { width } = useWindowDimensions();

  return (
    <section
      className={
        width < 480 ? 'scrolling-wrapper-flexbox hideScrollBar' : 'scrolling-wrapper-flexbox'
      }
    >
      {/* Show scrolling bar only for devices with width > 480 px */}
      {books.map(book => (
        <Flex key={book._id} className='card' mr='10px' pr='10px'>
          <Flex
            position='relative'
            text-align='center'
            mb='20px'
            mt='10px'
            borderRadius='15px'
            className={'emptyClass cardDarkShadow'}
          >
            <PortraitBookCard book={book} />
          </Flex>
        </Flex>
      ))}
    </section>
  );
};

export default PortraitBooksGroup;
