export type authenticatedInitialStateType = boolean;

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
