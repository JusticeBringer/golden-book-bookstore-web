import { AnyAction } from 'redux';
import { getCookie } from '../../util/helpers';
import { authenticated } from '../../util/constants/constants.cookies';
import { SIGN_IN, SIGN_OUT } from '../../util/constants/constants.redux';
import { authenticatedInitialStateType } from './reducers.types';

export const authenticationInitialState: authenticatedInitialStateType =
  getCookie(authenticated).toString() === 'true' ? true : false;

export const authenticationReducer = (state = authenticationInitialState, action: AnyAction) => {
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
