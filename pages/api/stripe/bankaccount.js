const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method == 'POST') {
    const {
      country,
      currency,
      account_holder_name,
      account_holder_type,
      routing_number,
      account_number,
    } = req.body;

    const token = await stripe.tokens.create({
      bank_account: {
        country,
        currency,
        account_holder_name,
        account_holder_type,
        routing_number,
        account_number,
      },
    });
    return res.status(200).json(token);
  }
  return res.status(200).json({ message: 'Stripe API repository' });
}
