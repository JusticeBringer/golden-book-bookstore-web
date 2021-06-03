import { Flex, Heading } from '@chakra-ui/react';

import { PortraitBooksGroup } from '../Reusable/PortraitBooksGroup';
import { LandscapeBooksGroup } from '../Reusable/LandscapeBooksGroup';
import { PortraitCdsGroup } from '../Reusable/PortraitCdsGroup';

import { theme } from '../../styles/theme';
import { HomePageType } from '../../util/types';

export const Home: React.FC<HomePageType> = (props: HomePageType) => {
  const { books, cds } = props;

  return (
    <Flex justifyContent='left' alignItems='left' flexDirection='column' className='flexboxGap'>
      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlue[100]}>
        Cărți landscape
      </Heading>
      <LandscapeBooksGroup books={books} />

      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlue[100]}>
        Cărți portret
      </Heading>
      <Flex maxW='100vw'>
        <PortraitBooksGroup books={books} />
      </Flex>

      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlue[100]}>
        Cd-uri portret
      </Heading>
      <Flex maxW='100vw'>
        <PortraitCdsGroup cds={cds} />
      </Flex>
    </Flex>
  );
};

export default Home;
