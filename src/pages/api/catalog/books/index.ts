import { NextApiRequest, NextApiResponse } from 'next';
import { isValidApiCall } from '../../../../util/helpers';
import { getAllBooks } from '../../../../database/services/book.service';
import { connect } from '../../../../database/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (isValidApiCall(req.url as string)) {
    if (process.env.NODE_ENV !== 'production') {
      // console.log({ req });
      // console.log(req.url);
      connect();

      if (req.method === 'POST') {
        // Process a POST request
      } else if (req.method === 'GET') {
        const { result, errorRet } = await getAllBooks();
        if (!errorRet) {
          // console.log('result: ', result);
          res.status(200).json(result);
        } else {
          // console.log('error is: ', errorRet);
          res.status(500).json({ message: errorRet });
        }
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
