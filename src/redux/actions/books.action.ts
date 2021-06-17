import { RECEIVE_BOOKS } from './actions.types';
import { Dispatch } from 'redux';
// import { useFetch } from '../../util/helpers';
// import { IBook } from '../../database/models/book/book.interface';
import { getBooks } from '../../util/mockedData';

const receiveBooks = (books: any) => ({
  type: RECEIVE_BOOKS,
  payload: {
    books
  }
});

export const getAllBooks = () => (dispatch: Dispatch) => {
  let books = getBooks();
  dispatch(receiveBooks(books));
};
