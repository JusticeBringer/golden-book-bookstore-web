import { combineReducers } from 'redux';
import authenticationReducer from './authentication.reducer';
import shoppingCartReducer from './shoppingCart.reducer';
import booksReducer from './books.reducer';
import updatingStoreReducer from './updatingStore.reducer';

export const allReducers = combineReducers({
  authenticated: authenticationReducer,
  shoppingCart: shoppingCartReducer,
  books: booksReducer,
  updatingStore: updatingStoreReducer
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
