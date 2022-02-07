import { useEffect, useState } from 'react';
import { Flex, Text, Button, Heading, Stack, Icon } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import { OrderDocument } from '../../database/models/order/order.interface';
import { nextRedirectPushBrowser } from '../../util/helpers';
import { theme } from '../../styles/theme';

import { Loading } from '../Reusable/Loading';
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';

type OrderProps = {
  orders: OrderDocument[];
};

export const Orders: React.FC<OrderProps> = (props: OrderProps) => {
  const { orders } = props;
  const userStore = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(true);
  const [myOrders, setMyOrders] = useState<OrderDocument[]>([]);

  useEffect(() => {
    if (!orders) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [orders]);

  useEffect(() => {
    if (orders !== []) {
      const myOrd: OrderDocument[] = [];
      orders.map(order => {
        if (order.userId === userStore.data.id) {
          myOrd.push(order);
        }
      });
      setMyOrders(myOrd);
    }
  }, [orders]);

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
        onClick={() => nextRedirectPushBrowser('/profile')}
      >
        Înapoi
      </Button>
      <Heading my={['5vh']}> Comenzile mele </Heading>

      <Flex flexDir='column'>
        <Flex flexDir='row' justifyContent='space-between' w={['40vw']}>
          <Heading as='h3' fontSize={['4vw']}>
            Nr. comandă
          </Heading>
          <Heading as='h3' fontSize={['4vw']}>
            Status
          </Heading>
        </Flex>
        {loading ? (
          <Loading />
        ) : (
          <Stack flexDir='column' spacing={['5px']}>
            {myOrders.map(order => (
              <Flex flexDir='row' key={order._id} alignItems='center'>
                <Flex
                  flexDir='row'
                  justifyContent='space-between'
                  w={['40vw']}
                  borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}
                  pb={['5px']}
                >
                  <Text># {order._id.substring(0, 5)}</Text>
                  <Text> {parseStatusDelivery(order.statusDelivery)}</Text>
                </Flex>
                <Flex flexDir='row' pl={'10vw'} alignItems='center'>
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    bgColor={theme.colors.primaryBlue[50]}
                    variant='solid'
                    onClick={() => nextRedirectPushBrowser(`orders/${order._id}`)}
                  >
                    Detalii
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Stack>
        )}
      </Flex>
    </>
  );
};

export default Orders;
