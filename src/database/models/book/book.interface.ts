import { Document } from 'mongoose';

export interface IBook {
  title: string;
  author: string;
  publisher: string;
  price: number;
  pages?: number;
  description?: string;
  state: string;
  quantity: number;
  soldQuantity: number;
  image: string;
  discount?: number;
  category?: string;
  publishingYear?: number;
  rating?: number;
  reviews?: string[];
}

interface IBookInput {
  title: IBook['title'];
  author: IBook['author'];
  publisher: IBook['publisher'];
  price: IBook['price'];
  pages?: IBook['pages'];
  description: IBook['description'];
  state: IBook['state'];
  quantity: IBook['quantity'];
  image: IBook['image'];
  discount?: IBook['discount'];
  category: IBook['category'];
  publishingYear: IBook['publishingYear'];
}

export interface BookInput extends IBookInput {}
export interface BookDocument extends IBook, Document {}
export default BookDocument;
