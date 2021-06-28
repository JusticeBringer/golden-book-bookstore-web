import { Flex, Text, Button, Stack } from '@chakra-ui/react';
import { GenericHeading } from '../SubComponents/GenericHeading';
import { BookDocument } from '../../database/models/book/book.interface';
import { useEffect, useState } from 'react';
import Loading from '../Reusable/Loading';

import { theme } from '../../styles/theme';
import { qtysType } from '../../redux/reducers/reducers.types';
import { getUserQty } from '../../util/helpers';
import TextListItem from '../Reusable/TextListItem';
import ProductListItem from '../Reusable/ProductListItem';

type StepZeroProps = {
  books: BookDocument[];
  booksQtys: qtysType[];
};

export const StepZero: React.FC<StepZeroProps> = (props: StepZeroProps) => {
  const { books, booksQtys } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (books === []) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [books]);

  return (
    <Flex justifyContent='space-between' alignItems='flex-start' flexDir='column'>
      <Flex>
        <GenericHeading text='Sumar comandă' />
      </Flex>
      {loading ? (
        <Loading />
      ) : (
        <Stack spacing={['5px', '10px', '15px']}>
          {books.map((book: BookDocument) => (
            <Flex flexDir='column' key={book._id}>
              <ProductListItem
                productTitle={book.title}
                textUnderTitle={book.author}
                productQuantity={getUserQty(book._id, booksQtys)}
                productPrice={book.price}
              />
            </Flex>
          ))}

          <Flex flexDir='column'>
            <TextListItem mainText={'Cost transport'} secondaryText={'după pasul următor'} />
            <TextListItem mainText={'Total'} secondaryText={'după alegerea metodei de livrare'} />
          </Flex>
        </Stack>
      )}
    </Flex>
  );
};

export default StepZero;
