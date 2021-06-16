import { RECEIVE_BOOKS } from './index';
import { useFetch } from '../../util/helpers';
import { IBook } from '../../database/models/book/book.interface';
import { getBooks } from '../../util/mockedData';

const receiveBooks = (books: any) => ({
  type: RECEIVE_BOOKS,
  books
});

export const getAllBooks = () => dispatch => {
  let books = getBooks();
  dispatch(receiveBooks(books));
};
