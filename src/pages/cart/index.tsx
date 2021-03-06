import axios from 'axios';
import { GetStaticProps } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import Cart from '../../components/Cart/Cart';
import { BookDocument } from '../../database/models/book/book.interface';
import { useEffect, useState } from 'react';
import TopSpacer from '../../components/Reusable/TopSpacer';

type CartProps = {
  books: BookDocument[];
};

export const getStaticProps: GetStaticProps = async () => {
  const booksApi = process.env.DOMAIN_URL_API_BOOKS;
  const headers = {
    authorization: process.env.SECRET_JWT_TOKEN
  };

  if (process.env.NODE_ENV !== 'production') {
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
      }
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
    setLoading(false);
  }, [books]);

  return (
    <Flex direction='column' pl={['3vw', '10vw', '10vw', '20vw']}>
      <Box>{loading ? '' : <Cart books={books} />}</Box>
      <TopSpacer spacing='100px' />
    </Flex>
  );
};

export default Index;
