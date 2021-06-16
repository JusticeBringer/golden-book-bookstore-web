import mongoose from 'mongoose';
import { BookSchema } from './book.schema';
import { BookDocument } from './book.interface';

export const BookModel = mongoose.models.Book || mongoose.model<BookDocument>('Book', BookSchema);
export default BookModel;
