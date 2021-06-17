import { combineReducers } from 'redux';
import authenticationReducer from './authentication.reducer';
import shoppingCartReducer from './shoppingCart.reducer';
import booksReducer from './books.reducer';

export const allReducers = combineReducers({
  authenticated: authenticationReducer,
  shoppingCart: shoppingCartReducer,
  books: booksReducer
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
