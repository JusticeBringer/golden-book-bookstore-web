import authenticationReducer from './authentication.reducer';

import { combineReducers } from 'redux';

export const allReducers = combineReducers({
  authentication: authenticationReducer
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
