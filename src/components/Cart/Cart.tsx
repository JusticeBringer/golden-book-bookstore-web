import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Flex,
  Box,
  Grid,
  Text,
  Button,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  Modal
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { PortraitProductCartBooks } from '../Reusable/PortraitProductCartBooks';
import { qtysType, idsAndQtysType } from '../../redux/reducers/reducers.types';
import { RootState } from '../../redux/reducers';
import { BookDocument } from '../../database/models/book/book.interface';
import { Loading } from '../Reusable/Loading';
import { GenericHeading } from '../SubComponents/GenericHeading';
import { mapIdsToProducts, nextRedirectPushBrowser } from '../../util/helpers';

type CartProps = {
  books: BookDocument[];
};

export const Cart: React.FC<CartProps> = (props: CartProps) => {
  const { books } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  useEffect(() => {
    if (!booksIdsStore) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [booksIdsStore]);

  const authenticated = useSelector((state: RootState) => state.authenticated);

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

  const handleCheckoutClick = (event: any) => {
    event.preventDefault();

    if (authenticated) {
      nextRedirectPushBrowser('/cart/checkout');
    } else {
      // popup
      onOpen();
    }
  };

  return (
    <Flex flexDirection='column' pr='10vw'>
      <Flex justifyContent='space-between' alignItems='center'>
        <GenericHeading text='Coșul meu' />
        {!loading && booksIdsState !== undefined && booksIdsState?.ids?.length > 0 ? (
          <>
            <Button
              fontSize={['14px', '16px', '16px', '18px', '20px']}
              onClick={e => handleCheckoutClick(e)}
              rightIcon={<ArrowForwardIcon />}
            >
              Spre comandă
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Autentificare necesară</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Pentru a finaliza procesul de plată este necesar să vă autentificați.
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme='blue'
                    mr={3}
                    onClick={() => nextRedirectPushBrowser('/signin')}
                  >
                    Spre autentificare
                  </Button>
                  <Button variant='ghost' onClick={onClose}>
                    {' '}
                    Închide{' '}
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        ) : (
          <></>
        )}
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
              {!loading &&
              !booksIdsState &&
              booksIdsState !== undefined &&
              booksIdsState?.ids.length === 0
                ? ' 0 cărți '
                : booksIdsState?.ids.length === 1
                ? ' 1 carte '
                : ` ${booksIdsState?.ids.length} cărți `}
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
