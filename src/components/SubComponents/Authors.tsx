import { useState } from 'react';
import { Text, Image, Flex } from '@chakra-ui/react';

import { PortraitBooksGroup } from '../Reusable/PortraitBooksGroup';
import { Horizontal } from '../Reusable/Horizontal';

import { theme } from '../../styles/theme';

import { authors } from '../../util/mockedData';
import { BooksArrayType } from '../../util/types';
import { qtysType } from '../../redux/reducers/reducers.types';
import { useWindowDimensions } from '../../util/helpers';

type AuthorsProps = {
  books: BooksArrayType;
  booksQtys: qtysType[];
  sizeFontBtDet?: string;
};

export const Authors: React.FC<AuthorsProps> = (props: AuthorsProps) => {
  const { books, sizeFontBtDet, booksQtys } = props;
  const { width } = useWindowDimensions();

  const [activeAuthor, setActiveAuthor] = useState('Father Iosif Trifa');
  const [activeBooks, setActiveBooks] = useState(
    books.filter(book => book.author === activeAuthor)
  );

  function markSelectedAuthor(authorName: string) {
    setActiveAuthor(authorName);
    setActiveBooks(books.filter(book => book.author === authorName));
  }

  return (
    <Flex borderRadius={['10px']} flexDir={'column'} minH={['350px', '400px', '450px', '600px']}>
      <section
        className={
          width < 480 ? 'scrolling-wrapper-flexbox hideScrollBar' : 'scrolling-wrapper-flexbox'
        }
      >
        {authors.map(author => (
          <Flex
            flexDir='column'
            justifyContent='space-between'
            textDecor='none !important'
            textAlign={'center'}
            key={author.name}
            alignItems='center'
            borderBottom={'4px solid white'}
            _hover={{ borderBottom: `4px solid ${theme.colors.primaryYellow[500]}` }}
            mr={['10px']}
            className='card'
            cursor='pointer'
            onClick={() => markSelectedAuthor(author.name)}
          >
            <Image
              loading='eager'
              src={author.photo}
              alt={author.photo}
              borderRadius={['10px']}
              w={['100px']}
              h={['100px']}
              mb={['15px']}
            />
            <Text color={theme.colors.primaryBlack[900]} fontSize={sizeFontBtDet ?? ['18px']}>
              {author.name}
            </Text>
          </Flex>
        ))}
      </section>
      <Flex maxW={['90vw', '90vw', '80vw', '75vw']}>
        <PortraitBooksGroup books={activeBooks} booksQtys={booksQtys} />
      </Flex>
    </Flex>
  );
};

export default Authors;
