import { GetStaticProps } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import Cart from '../../components/Cart/Cart';
import axios from 'axios';
import { BookDocument } from '../../database/models/book/book.interface';
import { useEffect, useState } from 'react';
import TopSpacer from '../../components/Reusable/TopSpacer';

type CartProps = {
  books: BookDocument[];
};

export const getStaticProps: GetStaticProps = async () => {
  // For debugging purposes
  // console.log(process.env);
  const booksApi = process.env.DOMAIN_URL_API_BOOKS;
  const headers = {
    authorization: process.env.SECRET_JWT_TOKEN
  };

  if (process.env.NODE_ENV !== 'production') {
    // console.log('Books api URL called from Cart page: ', booksApi);

    // books array
    let books: BookDocument[] = [];
    await axios
      .get<BookDocument[]>(booksApi, { headers })
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
    let books: BookDocument[] = [];
    await axios
      .get<BookDocument[]>(booksApi, { headers })
      .then(response => (books = response.data))
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });

    return {
      props: {
        books
      },
      revalidate: 60 // 60 seconds = 1 minute
    };
  }
};

const Index: React.FC<CartProps> = (props: CartProps) => {
  const booksProps = { props };
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<BookDocument[]>([]);

  useEffect(() => {
    setBooks(booksProps.props.books);
  }, [booksProps]);

  useEffect(() => {
    console.log('Pages-Cart received books', books);
    setLoading(false);
  }, [books]);

  return (
    <Flex width={'100%'} direction='column' pl={['3vw', '10vw', '10vw', '20vw']}>
      <Box>{loading ? '' : <Cart books={books} />}</Box>
      <TopSpacer spacing='100px' />
    </Flex>
  );
};

export default Index;
