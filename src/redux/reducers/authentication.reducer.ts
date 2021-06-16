import { AnyAction } from 'redux';
import { SIGN_IN, SIGN_OUT } from '../actions/index';

const authenticationState = {
  isLoggedIn: false
};

const authenticationReducer = (state = authenticationState.isLoggedIn, action: AnyAction) => {
  switch (action.type) {
    case SIGN_IN:
      return true;
    case SIGN_OUT:
      return false;

    default:
      return state;
  }
};

export default authenticationReducer;
