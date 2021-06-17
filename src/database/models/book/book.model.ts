import mongoose from 'mongoose';
import { BookDocument } from './book.interface';
import { BookSchema } from './book.schema';

export const BookModel = mongoose.models.Book || mongoose.model<BookDocument>('Book', BookSchema);
export default BookModel;
