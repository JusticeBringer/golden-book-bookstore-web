import { TOGGLE_SNACKBAR_OPEN, TOGGLE_SNACKBAR_CLOSE } from '../../util/constants/constants.redux';

export const toggleSnackbarOpen = (message: string) => ({
  type: TOGGLE_SNACKBAR_OPEN,
  message
});

export const toggleSnackbarClose = () => ({
  type: TOGGLE_SNACKBAR_CLOSE
});
