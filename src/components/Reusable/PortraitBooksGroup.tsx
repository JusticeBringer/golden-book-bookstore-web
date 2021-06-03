import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { PortraitBookCard } from '../Reusable/PortraitBookCard';

import { BookArrayType } from '../../util/types';

export const PortraitBooksGroup: React.FC<BookArrayType> = (props: BookArrayType) => {
  const { books } = props;
  const [userWidth, setUserWidth] = useState(0);

  useEffect(() => {
    setUserWidth(window.innerWidth);
  }, []);

  return (
    <section
      className={
        userWidth < 480 ? 'scrolling-wrapper-flexbox hideScrollBar' : 'scrolling-wrapper-flexbox'
      }
    >
      {/* Show scrolling bar only for devices with width > 480 px */}
      {books.map(book => (
        <Flex key={book.id} className='card' mr='10px' pr='10px'>
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
