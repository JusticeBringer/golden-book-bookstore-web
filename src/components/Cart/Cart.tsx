import { Flex, Heading, Box, Grid, Text } from '@chakra-ui/react';
import { PortraitProductCartBooks } from '../Reusable/PortraitProductCartBooks';
import { theme } from '../../styles/theme';
import { qtysType, idsAndQtysType } from '../../redux/reducers/reducers.types';
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
            <PortraitProductCartBooks books={booksInCart} booksQtys={booksQtys} />
          </Grid>
        )}
      </Box>
    </Flex>
  );
};

export default Cart;
