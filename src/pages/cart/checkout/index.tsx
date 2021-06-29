import axios from 'axios';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Checkout from '../../../components/Checkout/Checkout';
import { BookDocument } from '../../../database/models/book/book.interface';
import TopSpacer from '../../../components/Reusable/TopSpacer';

type CheckoutProps = {
  books: BookDocument[];
  ordersApiUrl: string;
  paymentsApiUrl: string;
  paypalClientId: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const booksApi = process.env.DOMAIN_URL_API_BOOKS;
  const ordersApiUrl = process.env.DOMAIN_URL_API_ORDERS;
  const paymentsApiUrl = process.env.DOMAIN_URL_API_PAYMENTS;
  const paypalClientId = process.env.PAYPAL_CLIENT_ID;

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
        books,
        ordersApiUrl,
        paymentsApiUrl,
        paypalClientId
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
        books,
        ordersApiUrl,
        paymentsApiUrl,
        paypalClientId
      },
      revalidate: 60 // 60 seconds = 1 minute
    };
  }
};

const Index: React.FC<CheckoutProps> = (props: CheckoutProps) => {
  const [loading, setLoading] = useState(true);
  const { books, ordersApiUrl, paymentsApiUrl, paypalClientId } = props;

  useEffect(() => {
    if (books === []) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [books]);

  return (
    <Flex direction='column' px={['3vw', '10vw', '10vw', '20vw']}>
      <Box>
        {loading ? (
          ''
        ) : (
          <Checkout books={books} ordersApiUrl={ordersApiUrl} paymentsApiUrl={paymentsApiUrl} />
        )}
      </Box>
      <TopSpacer spacing='100px' />
    </Flex>
  );
};

export default Index;
