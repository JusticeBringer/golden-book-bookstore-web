import { Flex, Text, Button, Heading, Stack, Icon } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import OrderDocument from '../../database/models/order/order.interface';
import { theme } from '../../styles/theme';
import { getDeliveryCost, getUserQty, nextRedirectPushBrowser } from '../../util/helpers';

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

  const [myBooks, setMyBooks] = useState<BookDocument[]>([]);

  useEffect(() => {
    const myLetBooks: BookDocument[] = [];

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

  const parseStatusDelivery = (status: string) => {
    if (status === 'inStore') {
      return 'In store';
    } else {
      return status;
    }
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
        Back
      </Button>
      <Flex flexDir='column'>
        <Heading my={['5vh']}>Order details</Heading>
        <Flex flexDir='column'>
          <Flex flexDir='row' justifyContent='space-between' w={['40vw']}>
            <Heading as='h3' fontSize={['4vw']}>
              Order number
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
          <TextListItem
            mainText={'Delivery cost'}
            secondaryText={getDeliveryCost(order.deliveryOption) + '$'}
          />
          <TextListItem
            mainText={'Total '}
            secondaryText={
              (getTotalPrice() + getDeliveryCost(order.deliveryOption)).toString() + '$'
            }
          />
        </Stack>
      </Flex>
    </>
  );
};

export default OrderDetails;
