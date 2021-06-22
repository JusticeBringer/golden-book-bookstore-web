import { useEffect, useState } from 'react';
import { slice, concat } from 'lodash';

import { Flex, Grid, Box, Text, Button } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

import { PortraitBookCard } from '../Reusable/PortraitBookCard';
import { LandscapeBooksGroup } from '../Reusable/LandscapeBooksGroup';
import { ListenCds } from '../SubComponents/ListenCds';
import { GenericHeading } from '../SubComponents/GenericHeading';
import { Authors } from '../SubComponents/Authors';
import { Loading } from '../Reusable/Loading';

import { theme } from '../../styles/theme';
import { HomePageType } from '../../util/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { idsAndQtysType, qtysType } from '../../redux/reducers/reducers.types';
import { BookDocument } from '../../database/models/book/book.interface';
import { getUserQty } from '../../util/helpers';

export const Home: React.FC<HomePageType> = (props: HomePageType) => {
  const { books, cds } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [books]);

  const LENGTH = books.length;
  const LIMIT = 4;

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(books, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = concat(list, slice(books, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  const booksIdsStore = useSelector((state: RootState) => state.shoppingCart.books);
  const [booksIdsState, setBooksIdsState] = useState<idsAndQtysType>({
    ids: [],
    qtys: []
  });

  const updatingStore = useSelector((state: RootState) => state.updatingStore);

  useEffect(() => {
    if (updatingStore === true) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [updatingStore]);

  const [booksInCart, setbooksInCart] = useState<BookDocument[]>([]);

  const [booksQtys, setBooksQtys] = useState<qtysType[]>([]);

  const [booksTotalQty, setbooksTotalQty] = useState(0);

  useEffect(() => {
    setBooksIdsState(booksIdsStore);
  }, [booksIdsStore]);

  useEffect(() => {
    setbooksInCart(mapIdsToProducts());
  }, [booksIdsState]);

  useEffect(() => {
    let booksQtysInCart: qtysType[] = [];

    booksIdsState.qtys.map(item => {
      booksQtysInCart.push(item);
    });

    setBooksQtys(booksQtysInCart);

    setLoading(false);
  }, [booksIdsState]);

  useEffect(() => {
    let sum: number = 0;

    booksQtys.forEach(item => {
      sum += item.qty;
    });

    setbooksTotalQty(sum);
  }, [booksQtys]);

  const mapIdsToProducts = (): BookDocument[] => {
    let booksInCart: BookDocument[] = [];

    booksIdsState.ids.map(id => {
      books.map(book => {
        book._id === id ? booksInCart.push(book) : '';
      });
    });

    return booksInCart;
  };

  return (
    <Grid className='home-container' gap={['10px']}>
      <Grid
        gridTemplateColumns={['repeat(auto-fit, minmax(0px, 1fr)']}
        gap={['20px']}
        gridArea='recBooks'
      >
        <Box>
          <GenericHeading text='Cărți recomandate' textAs='h1' />
          <Grid>
            {loading ? (
              <Loading />
            ) : (
              <Grid
                gridTemplateColumns={['repeat(auto-fit, minmax(240px, 1fr))']}
                gridColumnGap={['20px', '80px']}
                gridRowGap={['10px']}
              >
                {list.map(book => (
                  <Flex key={book._id} className='card'>
                    <Flex
                      text-align='center'
                      mt='10px'
                      borderRadius='15px'
                      className={'cardDarkShadow'}
                    >
                      <PortraitBookCard
                        key={book._id}
                        book={book}
                        userQty={getUserQty(book._id, booksQtys)}
                      />
                    </Flex>
                  </Flex>
                ))}
              </Grid>
            )}
          </Grid>
          <Flex justifyContent={['flex-start']} alignItems={['center']}>
            {showMore && (
              <Button
                variant={'ghost'}
                py={['2px']}
                mt={['2px']}
                borderBottom={['2px solid white']}
                _hover={{ bg: 'none', borderBottom: `2px solid ${theme.colors.primaryBlue[200]}` }}
                onClick={loadMore}
              >
                <Text mr={['7px']} fontSize={['14px']}>
                  Încarcă mai multe
                </Text>
                <RepeatIcon />
              </Button>
            )}
          </Flex>
        </Box>
      </Grid>
      {/* <Grid alignItems='start' gridArea='recCds' pr='20px' justifyContent='start'>
        <GenericHeading text='Cd-uri recomandate' textAs='h1' />
        <ListenCds cds={cds} />
      </Grid> */}
      <Grid gridArea='favBooks'>
        <GenericHeading text='Cele mai apreciate' textAs='h1' />
        {loading ? <Loading /> : <LandscapeBooksGroup books={books.slice(0, 3)} />}
      </Grid>
      {/* <Grid gridArea='athBooks'>
        <GenericHeading text='După autor' textAs='h1' />
        <Authors books={books} />
      </Grid> */}
    </Grid>
  );
};

export default Home;
