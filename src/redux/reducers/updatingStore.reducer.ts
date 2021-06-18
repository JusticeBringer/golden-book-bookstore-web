import { AnyAction } from 'redux';
import { UPDATING_STORE, NO_UPDATING_STORE } from '../../util/constants/constants.redux';

export const updatingStoreReducer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case UPDATING_STORE:
      return true;
    case NO_UPDATING_STORE:
      return false;
    default:
      return state;
  }
};

export default updatingStoreReducer;
