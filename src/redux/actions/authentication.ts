import { actionTypes } from './index';

export const signOut = () => {
  return {
    type: actionTypes.signOut
  };
};

export const signIn = () => {
  return {
    type: actionTypes.signIn
  };
};
