import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Box } from '@chakra-ui/react';
import { Home } from '../components/Home/Home';
import { TopSpacer } from '../components/Reusable/TopSpacer';
import { BookDocument } from '../database/models/book/book.interface';
import { CdType, HomePageType } from '../util/types';
import { getCds } from '../util/mockedData';

export const getServerSideProps: GetServerSideProps = async () => {
  // For debugging purposes
  // console.log(process.env);

  const booksApi = process.env.DOMAIN_URL_API_BOOKS;
  const headers = {
    authorization: process.env.SECRET_JWT_TOKEN
  };

  if (process.env.NODE_ENV !== 'production') {
    //console.log('Books api URL called from Home page: ', booksApi);

    // books array
    let books: BookDocument[] = [];
    await axios
      .get<BookDocument[]>(booksApi, { headers })
      .then(response => (books = response.data))
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });

    // cds array
    const cds: Array<CdType> = getCds();

    return {
      props: {
        books,
        cds
      }
    };
  } else {
    // TODO send actual data
    // books array
    let books: BookDocument[] = [];
    await axios
      .get<BookDocument[]>(booksApi, { headers })
      .then(response => (books = response.data))
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
    // cds array
    const cds: Array<CdType> = getCds();
    return {
      props: {
        books,
        cds
      },
      revalidate: 60 // 60 seconds = 1 minute
    };
  }
};

const Index: React.FC<HomePageType> = (props: HomePageType) => {
  const { books, cds } = props;

  // receive books and cds as props

  return (
    <>
      <Box direction='column' pl={['10vw', '10vw', '10vw', '20vw']} pr={['10vw']} mt='2vw'>
        <Home books={books} cds={cds} />
        <TopSpacer spacing='80px' />
      </Box>
    </>
  );
};

export default Index;
