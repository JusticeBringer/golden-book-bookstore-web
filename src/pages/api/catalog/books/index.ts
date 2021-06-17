import { NextApiRequest, NextApiResponse } from 'next';
import { isValidApiCall } from '../../../../util/helpers';
import { getAllBooks } from '../../../../database/services/book.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (isValidApiCall(req.url as string)) {
    if (process.env.NODE_ENV !== 'production') {
      // console.log({ req });
      // console.log(req.url);

      if (req.method === 'POST') {
        // Process a POST request
      } else if (req.method === 'GET') {
        const books = await getAllBooks();
        // console.log('books: ', books);
        res.status(200).json(books);
      } else {
        // do smth
      }
    } else {
      // TODO modify
      if (req.method === 'POST') {
        // Process a POST request
      } else if (req.method === 'GET') {
        res.status(200).json(await getAllBooks());
      } else {
        // do smth
      }
    }
  } else {
    res.status(403).json({ error: 'Unathorized' });
  }
}
