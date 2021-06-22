import { TOGGLE_SNACKBAR_OPEN, TOGGLE_SNACKBAR_CLOSE } from '../../util/constants/constants.redux';

export const toggleSnackbarOpen = (snackType: string, snackMessage: string) => ({
  type: TOGGLE_SNACKBAR_OPEN,
  payload: {
    type: snackType,
    message: snackMessage
  }
});

export const toggleSnackbarClose = () => ({
  type: TOGGLE_SNACKBAR_CLOSE
});
