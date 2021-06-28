import { SET_USER_ID, SET_USER_JWT_TOKEN } from '../../util/constants/constants.redux';

export const setUserId = (givenId: string) => {
  return {
    type: SET_USER_ID,
    payload: {
      id: givenId
    }
  };
};

export const setUserJwtToken = (givenJwtToken: string) => {
  return {
    type: SET_USER_JWT_TOKEN,
    payload: {
      jwtToken: givenJwtToken
    }
  };
};
