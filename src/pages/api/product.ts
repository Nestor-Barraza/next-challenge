import { NextApiRequest, NextApiResponse } from 'next';
import productsData from '../../resource/product.json';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  res.status(200).json(productsData);
}
