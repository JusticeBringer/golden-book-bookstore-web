import isLoggedReducer from './isLoggedReducer';
import shoppingCartReducer from './shoppingCartReducer';

import { combineReducers } from 'redux';

export const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  shopping: shoppingCartReducer
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
