import { Document } from 'mongoose';

export interface ICd {
  title: string;
  artists: string[];
  publisher?: string;
  price: number;
  tracks?: string[];
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
  samples?: string[];
}

interface ICdInput {
  title: ICd['title'];
  artists: ICd['artists'];
  publisher: ICd['publisher'];
  price: ICd['price'];
  tracks?: ICd['tracks'];
  description: ICd['description'];
  state: ICd['state'];
  quantity: ICd['quantity'];
  image: ICd['image'];
  discount?: ICd['discount'];
  category?: ICd['category'];
  publishingYear?: ICd['publishingYear'];
  samples?: ICd['samples'];
}

export interface CdInput extends ICdInput {}
export interface CdDocument extends ICd, Document {}
export default CdDocument;
