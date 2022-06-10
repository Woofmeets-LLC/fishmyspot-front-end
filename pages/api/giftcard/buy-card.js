const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  //create gift card payment intent

  if (req.method === 'POST') {
    const { amount, description, user_id } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd',
      payment_method_types: ['card'],
      description,
      metadata: {
        user_id,
      },
    });

    //return payment intent details
    res.status(200).json({
      client_secret: paymentIntent.client_secret,
    });
  } else {
    res.status(400).json('Not found');
  }
}
