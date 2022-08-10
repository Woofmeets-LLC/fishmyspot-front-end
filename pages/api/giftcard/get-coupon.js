const voucher_codes = require('voucher-code-generator');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const vouchers = voucher_codes.generate({
      pattern: `FMS${req.body.amount}-######`,
      count: 20,
    });

    res.status(200).json(vouchers);
  } else {
    res.status(404).json('Not found');
  }
}
