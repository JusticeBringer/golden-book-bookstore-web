import { AnyAction } from 'redux';
import { TOGGLE_SNACKBAR_OPEN, TOGGLE_SNACKBAR_CLOSE } from '../../util/constants/constants.redux';

const initialState = {
  toggleSnackbar: false,
  snackbarMessage: null
};

export const snackbarReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_SNACKBAR_OPEN: {
      return {
        ...state,
        toggleSnackbar: true,
        snackbarMessage: action.message
      };
    }

    case TOGGLE_SNACKBAR_CLOSE: {
      return {
        ...state,
        toggleSnackbar: false,
        snackbarMessage: null
      };
    }

    default: {
      return state;
    }
  }
};

export default snackbarReducer;
