import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from 'next';
import { Flex, Heading } from '@chakra-ui/react';
import { PortraitBooksGroup } from '../Reusable/PortraitBooksGroup';
import { wrapperStore } from '../../redux/store/store';

import { theme } from '../../styles/theme';
import { shoppingCartInitialStateType } from '../../redux/reducers/reducers.types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BookDocument } from '../../database/models/book/book.interface';
import { RootState } from '../../redux/reducers';
import { getAllBooks } from '../../database/services/book.service';

type CartProps = {
  books: BookDocument[];
};

export const getStaticProps: GetStaticProps = async () => {
  // For debugging purposes
  // console.log(process.env);
  const booksApi = process.env.DOMAIN_URL_API + 'catalog/books?key=' + process.env.API_KEY;

  if (process.env.NODE_ENV !== 'production') {
    console.log('Books api URL: ', booksApi);

    // books array
    const books = await axios
      .get<BookDocument[]>(booksApi)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });

    return {
      props: {
        books
      },
      revalidate: 60 // 60 seconds = 1 minute
    };
  } else {
  }
};

export const Cart: React.FC<CartProps> = (props: CartProps) => {
  const { books } = props;

  const booksIdsStore = useSelector((state: RootState) => state.books);
  const [booksIdsState, setBooksIdsState] = useState<shoppingCartInitialStateType>({
    books: {
      ids: [],
      qtys: [
        {
          id: '',
          qty: 0
        }
      ]
    }
  });

  const [booksComp, setBooksComp] = useState<BookDocument[]>([]);

  useEffect(() => {
    setBooksIdsState(booksIdsState);
  }, [booksIdsStore]);

  useEffect(() => {
    setBooksComp(mapIdsToProducts(booksIdsState));
  }, [booksIdsState]);

  const mapIdsToProducts = (obj: shoppingCartInitialStateType): BookDocument[] => {
    let booksComp: BookDocument[] = [];

    books.forEach(book => booksComp.push(book));

    return booksComp;
  };

  return (
    <Flex justifyContent='center' alignItems='center' height='50vh' flexDirection='column'>
      <Heading fontSize='5vw' color={theme.colors.primaryBlack[800]}>
        Coșul meu
      </Heading>
      <PortraitBooksGroup books={booksComp} />
    </Flex>
  );
};

export default Cart;
