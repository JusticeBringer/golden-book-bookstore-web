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
import { BooksArrayType, HomePageType } from '../../util/types';
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

  const updatingStore = useSelector((state: RootState) => state.updatingStore);

  useEffect(() => {
    if (updatingStore === true) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [updatingStore]);

  const booksQtysCartStore: qtysType[] = useSelector(
    (state: RootState) => state.shoppingCart.books?.qtys
  );
  const [booksQtysCartState, setbooksQtysCartState] = useState<qtysType[]>([]);

  useEffect(() => {
    setbooksQtysCartState(booksQtysCartStore);
  }, [booksQtysCartStore]);

  const [mostRatedBooks, setMostRatedBooks] = useState<BookDocument[]>([]);
  useEffect(() => {
    const toSortBooks = [...books];
    toSortBooks.sort((a, b) => b.rating - a.rating);
    setMostRatedBooks(toSortBooks);
  }, [books]);

  return (
    <Grid className='home-container' gap={['10px']}>
      <Grid
        gridTemplateColumns={['repeat(auto-fit, minmax(0px, 1fr)']}
        gap={['20px']}
        gridArea='recBooks'
      >
        <Box>
          <GenericHeading text='Recommended books' textAs='h1' />
          <Grid>
            {loading ? (
              <Loading />
            ) : (
              <Grid
                gridTemplateColumns={['repeat(auto-fit, minmax(240px, 1fr))']}
                gridColumnGap={['20px', '100px', '120px']}
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
                        userQty={getUserQty(book._id, booksQtysCartState)}
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
                  Load more
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
        <GenericHeading text='Most loved' textAs='h1' />
        {loading ? (
          <Loading />
        ) : (
          <>
            {booksQtysCartState && booksQtysCartState?.length && (
              <LandscapeBooksGroup
                books={mostRatedBooks.slice(0, 3)}
                booksQtys={booksQtysCartState}
              />
            )}{' '}
          </>
        )}
      </Grid>
      <Grid gridArea='athBooks'>
        <GenericHeading text='By author' textAs='h1' />
        <Authors books={books} booksQtys={booksQtysCartState} />
      </Grid>
    </Grid>
  );
};

export default Home;
