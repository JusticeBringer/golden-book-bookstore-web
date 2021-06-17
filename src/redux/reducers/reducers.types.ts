export type authenticatedInitialStateType = boolean;

export type booksInititalStateType = {
  loading: boolean;
  books: any;
  error: string;
};

export type shoppingCartInitialStateType = {
  books: {
    ids: string[];
    qtys: [
      {
        id: string;
        qty: number;
      }
    ];
  };
};
