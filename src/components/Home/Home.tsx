import { Flex, Heading, Grid, Box, Text, Button } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

import { PortraitBooksGroup } from '../Reusable/PortraitBooksGroup';
import { PortraitBookCard } from '../Reusable/PortraitBookCard';
import { LandscapeBooksGroup } from '../Reusable/LandscapeBooksGroup';
import { PortraitCdCard } from '../Reusable/PortraitCdCard';
import { PortraitCdsGroup } from '../Reusable/PortraitCdsGroup';
import { LandscapeCdsGroup } from '../Reusable/LandscapeCdsGroup';

import { theme } from '../../styles/theme';
import { HomePageType } from '../../util/types';

export const Home: React.FC<HomePageType> = (props: HomePageType) => {
  const { books, cds } = props;

  return (
    <Grid
      className='home-container'
      gridAutoFlow={['column', 'column', 'column', 'column', 'column', 'row']}
    >
      <Grid gridTemplateColumns={['repeat(auto-fit, minmax(0px, 1fr)']} gap={['20px']} gridArea='a'>
        <Box>
          <Heading as='h1' fontSize='4vw' color={theme.colors.primaryBlack[900]} mb={['10px']}>
            Cărți recomandate
          </Heading>
          <Grid
            gridTemplateColumns={['repeat(auto-fit, minmax(240px, 1fr))']}
            gap={['20px']}
            pr={['10px']}
          >
            <PortraitBookCard book={books[0]} />
            <PortraitBookCard book={books[1]} />
            <PortraitBookCard book={books[2]} />
            <PortraitBookCard book={books[3]} />
          </Grid>
          <Flex justifyContent={['flex-start']} alignItems={['center']}>
            <Button
              variant={'ghost'}
              py={['2px']}
              mt={['2px']}
              borderBottom={['2px solid white']}
              _hover={{ bg: 'none', borderBottom: `2px solid ${theme.colors.primaryBlue[200]}` }}
            >
              <Text mr={['7px']} fontSize={['14px']}>
                Încarcă mai multe
              </Text>
              <RepeatIcon />
            </Button>
          </Flex>
        </Box>
      </Grid>
      <Grid alignItems='flex-start' gridArea='b'>
        <Box>
          <Heading as='h1' fontSize='4vw' color={theme.colors.primaryBlack[900]} mb={['10px']}>
            Cd-uri recomandate
          </Heading>
          <Grid pr={['10px']}>
            <PortraitCdCard cd={cds[0]} />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
