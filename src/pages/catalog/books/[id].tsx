import { GetStaticProps, GetStaticPaths } from 'next';
import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import axios from 'axios';
import BookDocument from '../../../database/models/book/book.interface';
import LandscapeBookCard from '../../../components/Reusable/LandscapeBookCard';

export const getStaticPaths: GetStaticPaths = async () => {
  const booksApi = process.env.DOMAIN_URL_API_BOOKS;
  const headers = {
    authorization: process.env.SECRET_JWT_TOKEN
  };

  // books array
  let books: BookDocument[] = [];
  await axios
    .get<BookDocument[]>(booksApi, { headers })
    .then(response => (books = response.data))
    .catch(error => {
      console.log(error);
      throw new Error(error);
    });

  console.log('books', books);

  const paths = books.map(book => {
    return {
      params: { id: book._id.toString() }
    };
  });

  return {
    paths,
    fallback: 'blocking'
  };
};

type DetailsProps = {
  book: BookDocument;
};

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params.id;

  const bookDetailsApiUrl = process.env.DOMAIN_URL_API_BOOKS + '/' + id.toString();
  const headers = {
    authorization: process.env.SECRET_JWT_TOKEN
  };

  let res: any;
  await axios
    .get<BookDocument>(bookDetailsApiUrl, { headers })
    .then(response => (res = response.data))
    .catch(error => {
      console.log(error);
      throw new Error(error);
    });

  console.log('res', res);

  return {
    props: {
      book: res
    },
    revalidate: 60
  };
};

const Index: React.FC<DetailsProps> = (props: DetailsProps) => {
  const { book } = props;

  return (
    <VStack
      width={'100%'}
      alignItems='flex-start'
      pl={['10vw', '10vw', '10vw', '20vw']}
      pr={['10vw', '10vw', '15vw']}
      spacing='48px'
    >
      <Heading> {book.title} book details</Heading>
      <Box w='90%'>
        <LandscapeBookCard book={book} disableNavigation={true} />
      </Box>
    </VStack>
  );
};

export default Index;
