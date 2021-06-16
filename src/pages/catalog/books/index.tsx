import React from 'react';
import { GetStaticProps } from 'next';
import { Flex } from '@chakra-ui/react';

import Books from '../../../components/Books/Books';
import { TopSpacer } from '../../../components/Reusable/TopSpacer';

import { BooksPageType, BookType } from '../../../util/types';
import { getBooks } from '../../../util/mockedData';

export const getStaticProps: GetStaticProps = async () => {
  // initializeaza cartile
  const books: Array<BookType> = getBooks();

  return {
    props: {
      books
    }
  };
};

const Index: React.FC<BooksPageType> = React.memo((props: BooksPageType) => {
  const { books } = props;

  return (
    <>
      <Flex width={'100%'} direction='column' pl='15vw' mt='2vw'>
        <Books books={books} />
        <TopSpacer spacing='80px' />
      </Flex>
    </>
  );
});

export default Index;
