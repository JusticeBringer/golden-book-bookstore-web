import { NextApiRequest, NextApiResponse } from 'next';
import { getBooks } from '../../../../util/mockedData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
  } else if (req.method === 'GET') {
    res.status(200).json(getBooks());
  } else {
  }
}
