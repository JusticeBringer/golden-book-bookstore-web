import { SIGN_IN, SIGN_OUT } from '../../util/constants/constants.redux';

export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
