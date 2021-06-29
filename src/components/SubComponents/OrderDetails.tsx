import { Flex, Text, Button, Heading, Stack, Icon } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import OrderDocument from '../../database/models/order/order.interface';
import { theme } from '../../styles/theme';
import { getUserQty, nextRedirectPushBrowser } from '../../util/helpers';

import { TextListItem } from '../Reusable/TextListItem';
import { ProductListItem } from '../Reusable/ProductListItem';
import BookDocument from '../../database/models/book/book.interface';
import { useEffect, useState } from 'react';

type OrderDetailsProps = {
  order: OrderDocument;
  books: BookDocument[];
};

export const OrderDetails: React.FC<OrderDetailsProps> = (props: OrderDetailsProps) => {
  const { order, books } = props;

  const parseStatusDelivery = (status: string) => {
    if (status === 'In store') {
      return 'În magazin';
    } else {
      return status;
    }
  };

  const [myBooks, setMyBooks] = useState<BookDocument[]>([]);

  useEffect(() => {
    let myLetBooks: BookDocument[] = [];

    books.map(book => {
      order.items.map(item => {
        if (book._id === item.id) {
          myLetBooks.push(book);
        }
      });
    });

    setMyBooks(myLetBooks);
  }, [books]);

  const getTotalPrice = () => {
    let sum = 0;
    myBooks.map((book: BookDocument) => {
      sum += book.price;
    });
    return sum;
  };

  return (
    <>
      <Button
        leftIcon={<ArrowBackIcon />}
        bgColor={theme.colors.primaryBlue[100]}
        aria-label='back'
        size='md'
        onClick={() => nextRedirectPushBrowser('/profile/orders')}
      >
        Înapoi
      </Button>
      <Flex flexDir='column'>
        <Heading my={['5vh']}>Detalii comandă</Heading>
        <Flex flexDir='column'>
          <Flex flexDir='row' justifyContent='space-between' w={['40vw']}>
            <Heading as='h3' fontSize={['4vw']}>
              Nr. comandă
            </Heading>
            <Heading as='h3' fontSize={['4vw']}>
              Status
            </Heading>
          </Flex>
        </Flex>

        <Flex flexDir='row' justifyContent='space-between' w={['40vw']}>
          <Text># {order._id.substr(0, 5)}</Text>
          <Text> {parseStatusDelivery(order.statusDelivery)}</Text>
        </Flex>

        <Stack flexDir='column' spacing={['5px', '10px']} mt={['3vh']}>
          {myBooks.map((book: BookDocument) => (
            <Flex flexDir='column' key={book._id}>
              <ProductListItem
                productTitle={book.title}
                textUnderTitle={book.author}
                productQuantity={getUserQty(book._id, order.items)}
                productPrice={book.price}
              />
            </Flex>
          ))}
        </Stack>
        <Stack direction='column' spacing={['5px', '10px']}>
          {/* <TextListItem mainText={'Cost transport'} secondaryText={'0 lei'} /> */}
          <TextListItem mainText={'Total '} secondaryText={getTotalPrice().toString() + ' lei'} />
          <Text opacity={0.7}>{'*fără transport'} </Text>
        </Stack>
      </Flex>
    </>
  );
};

export default OrderDetails;
