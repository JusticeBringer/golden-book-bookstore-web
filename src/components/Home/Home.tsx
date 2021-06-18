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

  return (
    <Grid className='home-container' gap={['10px']}>
      <Grid
        gridTemplateColumns={['repeat(auto-fit, minmax(0px, 2fr)']}
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
                gap={['20px']}
                pr={['10px']}
              >
                {list.map(book => (
                  <PortraitBookCard key={book._id} book={book} />
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
      {/* <Grid gridArea='favBooks'>
        <GenericHeading text='Cele mai apreciate' textAs='h1' />
        <LandscapeBooksGroup books={books.slice(0, 3)} />
      </Grid>
      <Grid gridArea='athBooks'>
        <GenericHeading text='După autor' textAs='h1' />
        <Authors books={books} />
      </Grid> */}
    </Grid>
  );
};

export default Home;
