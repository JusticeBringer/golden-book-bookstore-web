import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../redux/actions/books.action';
import { RootState } from '../redux/reducers';

import { GetStaticProps } from 'next';
import axios from 'axios';
import { Box } from '@chakra-ui/react';
import { Home } from '../components/Home/Home';
import { TopSpacer } from '../components/Reusable/TopSpacer';
import { BookDocument } from '../database/models/book/book.interface';
import { CdType, HomePageType } from '../util/types';
import { getCds } from '../util/mockedData';
import { resetMockedData } from '../scripts/resetMockedData';

export const getStaticProps: GetStaticProps = async () => {
  // For debugging purposes
  // console.log(process.env);
  const booksApi = process.env.DOMAIN_URL_API_BOOKS;

  if (process.env.NODE_ENV !== 'production') {
    if (process.env.RESET_MOCKED_DATA === 'true') {
      console.log('Resetting mocked data...');
      await resetMockedData();
      console.log('Mocked data resetted');
      // set back to false so no resets when reloading page
      process.env.RESET_MOCKED_DATA = 'false';
    }
    // console.log('Books api URL called from Home page: ', booksApi);

    // books array
    const books: BookDocument[] | void = await axios
      .get<BookDocument[] | void>(booksApi)
      .then(response => response.data)
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
  } else {
    // TODO send actual data
    // books array
    // const books: Array<IBook> = getBooks();
    // // cds array
    // const cds: Array<CdType> = getCds();
    // return {
    //   props: {
    //     books,
    //     cds
    //   },
    //   revalidate: 300 // 60 seconds = 1 minute
    // };
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
