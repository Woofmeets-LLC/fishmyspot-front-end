import axios from 'axios';

export default async function handler(req, res) {
  const { amount } = req.body;

  res.send('unable to create voucher');
}

export const config = {
  bodyParser: true,
};
