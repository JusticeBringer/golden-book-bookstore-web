export type authenticatedInitialStateType = boolean;

export type booksInititalStateType = {
  loading: boolean;
  books: any;
  error: string;
};

export type qtysType = {
  id: '';
  qty: 0;
};

export type idsAndQtysType = {
  ids: string[];
  qtys: qtysType[];
};

export type shoppingCartInitialStateType = {
  books: idsAndQtysType;
};

export type updatingStoreInitialStateType = boolean;

export type snackbarInitialStateType = {
  toggleSnackbar: boolean;
  type: string;
  message: string;
};
