import { BookDocument } from '../database/models/book/book.interface';

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

export type BooksArrayType = Array<BookDocument>;

export type CdsArrayType = Array<CdType>;
export type AuthorsArrayType = Array<AuthorType>;

export type HomePageType = {
  books: BookDocument[];
  cds: CdsArrayType;
};

export type BooksPageType = {
  books: BookDocument[];
};

export type CdsPageType = {
  cds: CdsArrayType;
};
