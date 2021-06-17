import { AnyAction } from 'redux';
import { getCookie } from '../../util/helpers';
import { authenticated } from '../../util/constants.cookies';
import { SIGN_IN, SIGN_OUT } from '../actions/actions.types';
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
