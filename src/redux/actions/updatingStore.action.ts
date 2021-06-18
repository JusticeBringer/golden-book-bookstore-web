import { UPDATING_STORE, NO_UPDATING_STORE } from '../../util/constants/constants.redux';

export const updatingStore = () => {
  return {
    type: UPDATING_STORE
  };
};

export const noUpdatingStore = () => {
  return {
    type: NO_UPDATING_STORE
  };
};
