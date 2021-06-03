import React from 'react';
import { GetStaticProps } from 'next';
import { Flex, Box } from '@chakra-ui/react';

import { MobileFooter } from '../../../components/Footer/MobileFooter';
import { DesktopFooter } from '../../../components/Footer/DesktopFooter';
import { Header } from '../../../components/Header/Header';
import Books from '../../../components/Books/Books';
import { TopSpacer } from '../../../components/Reusable/TopSpacer';

import { BooksPageType, BookType } from '../../../util/types';
import { getBooks } from '../../../util/dataMock';

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
      <Header />
      <DesktopFooter />

      <Flex width={'100%'} direction='column' alignItems='center'>
        <Box pl='10vw' mt='2vw'>
          <Books books={books} />
        </Box>

        <TopSpacer spacing='80px' />
      </Flex>

      <MobileFooter />
    </>
  );
});

export default Index;
