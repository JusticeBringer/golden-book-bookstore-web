import { GetStaticProps } from 'next';
import { Flex } from '@chakra-ui/react';

import { Home } from '../components/Home/Home';
import { MobileFooter } from '../components/Footer/MobileFooter';
import { DesktopFooter } from '../components/Footer/DesktopFooter';
import { Header } from '../components/Header/Header';

import { TopSpacer } from '../components/Reusable/TopSpacer';

import { BookType, CdType, HomePageType } from '../util/types';
import { getBooks, getCds } from '../util/dataMock';

export const getStaticProps: GetStaticProps = async () => {
  // books array
  const books: Array<BookType> = getBooks();

  // cds array
  const cds: Array<CdType> = getCds();

  // For debugging purposes
  // console.log(process.env);

  if (process.env.NODE_ENV !== 'production') {
    return {
      props: {
        books,
        cds
      }
    };
  } else {
    // TODO send actual data
    return {
      props: {}
    };
  }
};

const Index: React.FC<HomePageType> = (props: HomePageType) => {
  const { books, cds } = props;

  return (
    <>
      <Header />
      <DesktopFooter />

      <Flex width={'100%'} direction='column' pl='15vw' mt='2vw'>
        <Home books={books} cds={cds} />
        <TopSpacer spacing='80px' />
      </Flex>

      <MobileFooter />
    </>
  );
};

export default Index;
