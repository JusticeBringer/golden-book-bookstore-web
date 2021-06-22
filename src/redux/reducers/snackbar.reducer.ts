import { AnyAction } from 'redux';
import { TOGGLE_SNACKBAR_OPEN, TOGGLE_SNACKBAR_CLOSE } from '../../util/constants/constants.redux';
import { snackbarInitialStateType } from './reducers.types';

export const snackbarInitialState: snackbarInitialStateType = {
  toggleSnackbar: false,
  type: '',
  message: ''
};

export const snackbarReducer = (state = snackbarInitialState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_SNACKBAR_OPEN: {
      return {
        ...state,
        toggleSnackbar: true,
        type: action.payload.type,
        message: action.payload.message
      };
    }

    case TOGGLE_SNACKBAR_CLOSE: {
      return {
        ...state,
        toggleSnackbar: false
      };
    }

    default: {
      return state;
    }
  }
};

export default snackbarReducer;
