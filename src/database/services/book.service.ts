import { CreateQuery, FilterQuery, QueryOptions } from 'mongoose';
import { BookDocument, BookInput } from '../models/book/book.interface';
import Books from '../models/book/book.model';

/**
 * @param  {CreateQuery<BookInput>} input
 */
export async function createBook(input: CreateQuery<BookInput>) {
  return Books.create<BookInput>(input);
}

export async function findBook(
  query: FilterQuery<BookDocument>,
  options: QueryOptions = { lean: true }
) {
  return Books.findOne(query, null, options);
}

export async function deleteAllBooks() {
  return Books.deleteMany({});
}

export async function getAllBooks() {
  let errorRet: string = '';
  const result: BookDocument[] | void = await Books.find()
    .exec()
    .then()
    .catch(error => {
      errorRet = error;
    });
  return { result, errorRet };
}
