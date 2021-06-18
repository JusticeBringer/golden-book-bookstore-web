import { Flex, Heading, Box, Grid, Text } from '@chakra-ui/react';
import { PortraitProductCartBooks } from '../Reusable/PortraitProductCartBooks';
import { theme } from '../../styles/theme';
import { idsAndQtysType } from '../../redux/reducers/reducers.types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { BookDocument } from '../../database/models/book/book.interface';
import { Loading } from '../Reusable/Loading';

type CartProps = {
  books: BookDocument[];
};

export const Cart: React.FC<CartProps> = (props: CartProps) => {
  const { books } = props;

  const [loading, setLoading] = useState(true);
  const booksIdsStore = useSelector((state: RootState) => state.shoppingCart.books);
  const [booksIdsState, setBooksIdsState] = useState<idsAndQtysType>({
    ids: [],
    qtys: [
      {
        id: '',
        qty: 0
      }
    ]
  });

  const [booksInCart, setbooksInCart] = useState<BookDocument[]>([]);

  useEffect(() => {
    setBooksIdsState(booksIdsStore);
  }, [booksIdsStore]);

  useEffect(() => {
    setbooksInCart(mapIdsToProducts());
  }, [booksIdsState]);

  useEffect(() => {
    console.log('Component Cart received props:', books);
  }, [books]);

  const mapIdsToProducts = (): BookDocument[] => {
    let booksInCart: BookDocument[] = [];

    booksIdsState.ids.map(id => {
      books.map(book => {
        book._id === id ? booksInCart.push(book) : '';
      });
    });

    setLoading(false);
    return booksInCart;
  };

  return (
    <Flex flexDirection='column'>
      <Flex justifyContent='flex-start' alignItems='flex-start'>
        <Heading fontSize={['5vw']} color={theme.colors.primaryBlack[800]}>
          Coșul meu{' '}
        </Heading>
      </Flex>
      <Box>
        {loading ? (
          <Loading />
        ) : (
          <Grid>
            <Text
              alignSelf='flex-start'
              display='flex'
              opacity='0.7'
              fontSize={['10px', '14px', '16px', '20px']}
              mb={['10px']}
            >
              {booksInCart.length} elemente
            </Text>
            <PortraitProductCartBooks books={booksInCart} />
          </Grid>
        )}
      </Box>
    </Flex>
  );
};

export default Cart;
