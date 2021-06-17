export type BookType = {
  _id: number;
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
  discount?: number;
  category: string;
  publishingYear: number;
  rating?: number;
  reviews?: string[];
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
  rating?: number;
  reviews: string[];
  samples?: string[];
};

export type AuthorType = {
  name: string;
  photo: string;
};

export type BooksArrayType = Array<BookType>;
export type CdsArrayType = Array<CdType>;
export type AuthorsArrayType = Array<AuthorType>;

export type HomePageType = {
  books: BooksArrayType;
  cds: CdsArrayType;
};

export type BooksPageType = {
  books: BooksArrayType;
};

export type CdsPageType = {
  cds: CdsArrayType;
};
