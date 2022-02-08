import { GetServerSideProps } from 'next';
import { Box, Flex } from '@chakra-ui/react';

import Orders from '../../../components/Orders/Orders';
import { OrderDocument } from '../../../database/models/order/order.interface';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async () => {
  const ordersApiUrl = process.env.DOMAIN_URL_API_ORDERS;
  const headers = {
    authorization: process.env.SECRET_JWT_TOKEN
  };

  if (process.env.NODE_ENV !== 'production') {
    let orders: OrderDocument[] = [];
    await axios
      .get<OrderDocument[]>(ordersApiUrl, { headers })
      .then(response => (orders = response.data))
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });

    return {
      props: {
        orders
      }
    };
  } else {
    let orders: OrderDocument[] = [];
    await axios
      .get<OrderDocument[]>(ordersApiUrl, { headers })
      .then(response => (orders = response.data))
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });

    return {
      props: {
        orders
      }
    };
  }
};

type OrdersProps = {
  orders: OrderDocument[];
};

const Index: React.FC<OrdersProps> = (props: OrdersProps) => {
  const { orders } = props;

  return (
    <>
      <Flex
        width={'100%'}
        direction='column'
        alignItems='flex-start'
        pl={['10vw', '10vw', '10vw', '20vw']}
        pr={['10vw', '10vw', '15vw']}
      >
        <Box>
          <Orders orders={orders} />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
