import React from 'react';
import { GetStaticProps } from 'next';
import { Flex } from '@chakra-ui/react';

import Books from '../../../components/Books/Books';
import { TopSpacer } from '../../../components/Reusable/TopSpacer';
import { BookDocument } from '../../../database/models/book/book.interface';
import axios from 'axios';
import { BooksPageType } from '../../../util/types';

export const getStaticProps: GetStaticProps = async () => {
  // For debugging purposes
  // console.log(process.env);
  const booksApi = process.env.DOMAIN_URL_API_BOOKS;

  if (process.env.NODE_ENV !== 'production') {
    // console.log('Books api URL called from Books page: ', booksApi);

    // books array
    let books: BookDocument[] = [];
    await axios
      .get<BookDocument[]>(booksApi)
      .then(response => (books = response.data))
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });

    // console.log('books cart is: ', books);

    return {
      props: {
        books
      },
      revalidate: 60 // 60 seconds = 1 minute
    };
  } else {
  }
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
