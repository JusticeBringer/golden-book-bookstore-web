import { Dispatch } from 'redux';
import axios from 'axios';

import {
  FETCH_ALL_BOOKS_REQUEST,
  FETCH_ALL_BOOKS_SUCCESS,
  FETCH_ALL_BOOKS_FAILURE
} from '../../util/constants/constants.redux';

export const fetchAllBooksRequest = () => {
  return {
    type: FETCH_ALL_BOOKS_REQUEST
  };
};

export const fetchAllBooksSuccess = (books: any) => {
  return {
    type: FETCH_ALL_BOOKS_SUCCESS,
    payload: books
  };
};

export const fetchAllBooksFailure = (error: any) => {
  return {
    type: FETCH_ALL_BOOKS_FAILURE,
    payload: error
  };
};

export const fetchAllBooks = (url: string) => {
  return function (dispatch: Dispatch) {
    dispatch(fetchAllBooksRequest());
    axios
      .get(url)
      .then(response => {
        const allBooks = response.data;
        console.log(allBooks);
        dispatch(fetchAllBooksSuccess(allBooks));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchAllBooksFailure(error));
      });
  };
};
