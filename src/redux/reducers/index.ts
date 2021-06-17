import { combineReducers } from 'redux';
import authenticationReducer from './authentication.reducer';
import shoppingCartReducer from './shoppingCart.reducer';

export const allReducers = combineReducers({
  authenticated: authenticationReducer,
  shoppingCart: shoppingCartReducer
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
