import { Flex, Box, Grid, Text, Button } from '@chakra-ui/react';
import { PortraitProductCartBooks } from '../Reusable/PortraitProductCartBooks';
import { qtysType, idsAndQtysType } from '../../redux/reducers/reducers.types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { BookDocument } from '../../database/models/book/book.interface';
import { Loading } from '../Reusable/Loading';
import { GenericHeading } from '../SubComponents/GenericHeading';
import { mapIdsToProducts, nextRedirectPushBrowser } from '../../util/helpers';
import { ArrowForwardIcon } from '@chakra-ui/icons';

type CartProps = {
  books: BookDocument[];
};

export const Cart: React.FC<CartProps> = (props: CartProps) => {
  const { books } = props;

  const [loading, setLoading] = useState(true);
  const booksIdsStore: idsAndQtysType = useSelector((state: RootState) => state.shoppingCart.books);
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
    setbooksInCart(mapIdsToProducts(books, booksIdsState));
  }, [booksIdsState]);

  useEffect(() => {
    const booksQtysInCart: qtysType[] = [];

    booksIdsState.qtys.map(item => {
      booksQtysInCart.push(item);
    });

    setBooksQtys(booksQtysInCart);
    setLoading(false);
  }, [booksIdsState]);

  useEffect(() => {
    let sum = 0;
    booksQtys.forEach(item => {
      sum += item.qty;
    });
    setbooksTotalQty(sum);
  }, [booksQtys]);

  return (
    <Flex flexDirection='column' pr='10vw'>
      <Flex justifyContent='space-between' alignItems='center'>
        <GenericHeading text='Coșul meu' />
        <Button
          fontSize={['14px', '16px', '16px', '18px', '20px']}
          onClick={() => nextRedirectPushBrowser('/cart/checkout')}
          rightIcon={<ArrowForwardIcon />}
        >
          Spre comandă
        </Button>
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
              mt={['20px']}
            >
              Aveți
              {booksIdsState.ids.length === 0
                ? ' 0 cărți '
                : booksIdsState.ids.length === 1
                ? ' 1 carte '
                : ` ${booksIdsState.ids.length} cărți `}
              cu o cantitate de{' '}
              {booksTotalQty === 0
                ? '0 bucăți'
                : booksTotalQty === 1
                ? '1 bucată'
                : `${booksTotalQty} bucăți`}
            </Text>
            <PortraitProductCartBooks books={booksInCart} booksQtys={booksQtys} />
          </Grid>
        )}
      </Box>
    </Flex>
  );
};

export default Cart;
