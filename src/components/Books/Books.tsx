import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

import { PortraitBooksGroup } from '../Reusable/PortraitBooksGroup';
import { LandscapeBooksGroup } from '../Reusable/LandscapeBooksGroup';

import { theme } from '../../styles/theme';
import { BooksPageType } from '../../util/types';

export const Books: React.FC<BooksPageType> = React.memo((props: BooksPageType) => {
  const { books } = props;

  return (
    <Flex justifyContent='left' alignItems='left' flexDirection='column' className='flexboxGap'>
      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlue[100]}>
        Cărți portret
      </Heading>
      <Flex maxW='100vw'>
        <PortraitBooksGroup books={books} />
      </Flex>

      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlue[100]}>
        Cărți landscape
      </Heading>
      <LandscapeBooksGroup books={books} />
    </Flex>
  );
});

export default Books;
