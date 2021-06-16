import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';

import { Home } from '../components/Home/Home';
import { TopSpacer } from '../components/Reusable/TopSpacer';
import { BookType, CdType, HomePageType } from '../util/types';
import { getBooks, getCds } from '../util/mockedData';

import { resetMockedData } from '../scripts/resetMockedData';
import { getAllBooks } from '../redux/actions/books.action';

export const getStaticProps: GetStaticProps = async () => {
  // For debugging purposes
  // console.log(process.env);

  if (process.env.NODE_ENV !== 'production') {
    // books array

    const books: Array<BookType> = getBooks();

    // cds array
    const cds: Array<CdType> = getCds();

    if (process.env.RESET_MOCKED_DATA === 'true') {
      resetMockedData();
      // set back to false so no resets when reloading page
      process.env.RESET_MOCKED_DATA = 'false';
    }

    return {
      props: {
        books,
        cds
      }
    };
  } else {
    // TODO send actual data
    // books array
    const books: Array<BookType> = getBooks();

    // cds array
    const cds: Array<CdType> = getCds();

    return {
      props: {
        books,
        cds
      }
    };
  }
};

const Index: React.FC<HomePageType> = (props: HomePageType) => {
  const { books, cds } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

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
