export type BookType = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  price: number;
  pages?: number;
  description: string;
  state: string;
  quantity: number;
  soldQuantity: number;
  image: string;
  discount: number;
  category: string;
  publishingYear: number;
  rating: number;
  reviews: string[];
};

export type BookArrayType = {
  books: Array<BookType>;
};

export type CdType = {
  id: number;
  title: string;
  artists: string[];
  publisher: string;
  price: number;
  tracks: string[];
  description: string;
  state: string;
  quantity: number;
  soldQuantity: number;
  image: string;
  discount: number;
  category: string;
  publishingYear: number;
  rating: number;
  reviews: string[];
};

export type CdArrayType = {
  cds: Array<CdType>;
};

export type CdsArrayType = {
  cds: Array<CdType>;
};

export type HomePageType = {
  books: Array<BookType>;
  cds: Array<CdType>;
};

export type BooksPageType = {
  books: Array<BookType>;
};

export type CdsPageType = {
  cds: Array<CdType>;
};
