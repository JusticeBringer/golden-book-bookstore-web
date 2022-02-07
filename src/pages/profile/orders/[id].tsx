import { GetServerSideProps, GetStaticPaths } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import { OrderDocument } from '../../../database/models/order/order.interface';
import axios from 'axios';
import OrderDetails from '../../../components/SubComponents/OrderDetails';
import BookDocument from '../../../database/models/book/book.interface';

// export const getStaticPaths: GetStaticPaths = async () => {
//   const ordersApiUrl = process.env.DOMAIN_URL_API_ORDERS;
//   const headers = {
//     authorization: process.env.SECRET_JWT_TOKEN
//   };

//   let orders: OrderDocument[] = [];
//   await axios
//     .get<OrderDocument[]>(ordersApiUrl, { headers })
//     .then(response => (orders = response.data))
//     .catch(error => {
//       console.log(error);
//       throw new Error(error);
//     });

//   const paths = orders.map(order => {
//     return {
//       params: { id: order._id.toString() }
//     };
//   });

//   if (process.env.NODE_ENV !== 'production') {
//     return {
//       paths,
//       fallback: 'blocking'
//     };
//   } else {
//     return {
//       paths,
//       fallback: 'blocking'
//     };
//   }
// };

type DetailsProps = {
  order: OrderDocument;
  books: BookDocument[];
};

// Change to getStaticProps on hosting providers that support it
export const getServerSideProps: GetServerSideProps = async context => {
  const id = context.params.id;

  const orderDetailsApiUrl = process.env.DOMAIN_URL_API_ORDERS + '/' + id.toString();
  const headers = {
    authorization: process.env.SECRET_JWT_TOKEN
  };

  let res: any;
  await axios
    .get<OrderDocument[]>(orderDetailsApiUrl, { headers })
    .then(response => (res = response.data))
    .catch(error => {
      console.log(error);
      throw new Error(error);
    });

  const booksApi = process.env.DOMAIN_URL_API_BOOKS;

  let books: BookDocument[] = [];
  await axios
    .get<BookDocument[]>(booksApi, { headers })
    .then(response => (books = response.data))
    .catch(error => {
      throw new Error(error);
    });

  return {
    props: {
      order: res,
      books: books
    }
  };
};

const Index: React.FC<DetailsProps> = (props: DetailsProps) => {
  const { order, books } = props;

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
          <OrderDetails order={order} books={books} />
        </Box>
      </Flex>
    </>
  );
};

export default Index;
