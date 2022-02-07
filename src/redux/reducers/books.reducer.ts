import { AnyAction } from 'redux';
import {
  FETCH_ALL_BOOKS_REQUEST,
  FETCH_ALL_BOOKS_SUCCESS,
  FETCH_ALL_BOOKS_FAILURE
} from '../../util/constants/constants.redux';
import { booksInititalStateType } from './reducers.types';

export const booksInititalState: booksInititalStateType = {
  books: [],
  loading: false,
  error: ''
};

export const booksReducer = (state = booksInititalState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_ALL_BOOKS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_ALL_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: ''
      };
    case FETCH_ALL_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload
      };

    default:
      return state;
  }
};

export default booksReducer;
