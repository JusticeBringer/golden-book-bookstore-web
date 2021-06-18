import { Flex, Heading } from '@chakra-ui/react';
import { PortraitBooksGroup } from '../Reusable/PortraitBooksGroup';
import { wrapperStore } from '../../redux/store/store';

import { theme } from '../../styles/theme';
import { idsAndQtysType } from '../../redux/reducers/reducers.types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { BookDocument, IBook } from '../../database/models/book/book.interface';
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
    <Flex justifyContent='center' alignItems='center' height='50vh' flexDirection='column'>
      <Heading fontSize='5vw' color={theme.colors.primaryBlack[800]}>
        Coșul meu
      </Heading>
      {loading ? <Loading /> : <PortraitBooksGroup books={booksInCart} />}
    </Flex>
  );
};

export default Cart;
