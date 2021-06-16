import { AnyAction } from 'redux';
import { actionTypes } from '../actions/index';

const initialLoginState = {
  isLoggedIn: false
};

const isLoggedReducer = (state = initialLoginState.isLoggedIn, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.signIn:
      return true;
    case actionTypes.signOut:
      return false;

    default:
      return state;
  }
};

export default isLoggedReducer;
