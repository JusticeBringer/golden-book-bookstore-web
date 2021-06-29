import { AnyAction } from 'redux';
import { SET_USER_ID, SET_USER_JWT_TOKEN } from '../../util/constants/constants.redux';
import { userInitialStateType } from './reducers.types';
import { getCookie, isCookieExisting } from '../../util/helpers';
import { user } from '../../util/constants/constants.cookies';

export const userInitialState: userInitialStateType = {
  data: isCookieExisting(user)
    ? JSON.parse(JSON.stringify(getCookie(user)))
    : {
        id: '',
        jwtToken: ''
      }
};

export const userReducer = (state: any = userInitialState, action: AnyAction) => {
  switch (action.type) {
    case SET_USER_ID: {
      const newState = {
        id: action.payload.id as string,
        jwtToken: state.data.jwtToken
      };
      return { data: newState };
    }

    case SET_USER_JWT_TOKEN: {
      const newStateToken = {
        id: state.data.id as string,
        jwtToken: action.payload.jwtToken as string
      };
      return { data: newStateToken };
    }

    default:
      return state;
  }
};

export default userReducer;
