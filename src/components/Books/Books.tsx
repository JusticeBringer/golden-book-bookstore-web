import React, { useEffect, useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

import { PortraitBooksGroup } from '../Reusable/PortraitBooksGroup';
import { LandscapeBooksGroup } from '../Reusable/LandscapeBooksGroup';
import { Loading } from '../Reusable/Loading';

import { theme } from '../../styles/theme';
import { BooksPageType } from '../../util/types';

export const Books: React.FC<BooksPageType> = React.memo((props: BooksPageType) => {
  const { books } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [books]);

  return (
    <Flex justifyContent='left' alignItems='left' flexDirection='column' className='flexboxGap'>
      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlack[700]}>
        Cărți portret
      </Heading>
      <Flex maxW='100vw'>{loading ? <Loading /> : <PortraitBooksGroup books={books} />}</Flex>

      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlack[700]}>
        Cărți landscape
      </Heading>
      {loading ? <Loading /> : <LandscapeBooksGroup books={books} />}
    </Flex>
  );
});

export default Books;
