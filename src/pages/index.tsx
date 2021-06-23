import { GetStaticProps } from 'next';
import axios from 'axios';
import { Box } from '@chakra-ui/react';
import { Home } from '../components/Home/Home';
import { TopSpacer } from '../components/Reusable/TopSpacer';
import { BookDocument } from '../database/models/book/book.interface';
import { CdType, HomePageType } from '../util/types';
import { getCds } from '../util/mockedData';

export const getStaticProps: GetStaticProps = async () => {
  // For debugging purposes
  // console.log(process.env);

  if (process.env.NODE_ENV !== 'production') {
    const booksApi = process.env.DOMAIN_URL_API_BOOKS;

    //console.log('Books api URL called from Home page: ', booksApi);

    // books array
    let books: BookDocument[] = [];
    await axios
      .get<BookDocument[]>(booksApi)
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
    const booksApi = process.env.DOMAIN_URL_API_BOOKS;
    // TODO send actual data
    // books array
    let books: BookDocument[] = [];
    await axios
      .get<BookDocument[]>(booksApi)
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
      revalidate: 300 // 60 seconds = 1 minute
    };
  }
};

const Index: React.FC<HomePageType> = (props: HomePageType) => {
  const { books, cds } = props;

  return (
    <>
      <Box width={'100%'} direction='column' pl={['10vw', '10vw', '10vw', '20vw']} mt='2vw'>
        <Home books={books} cds={cds} />
        <TopSpacer spacing='80px' />
      </Box>
    </>
  );
};

export default Index;
