export type authenticatedInitialStateType = boolean;

export type booksInititalStateType = {
  loading: boolean;
  books: any;
  error: string;
};

export type idsAndQtysType = {
  ids: string[];
  qtys: [
    {
      id: string;
      qty: number;
    }
  ];
};

export type shoppingCartInitialStateType = {
  books: idsAndQtysType;
};
