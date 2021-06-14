import isLoggedReducer from './isLoggedReducer';

import { combineReducers } from 'redux';

export const allReducers = combineReducers({
  isLogged: isLoggedReducer
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
