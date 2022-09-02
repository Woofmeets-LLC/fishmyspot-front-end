import Stripe from 'stripe';

/**
 *
 * @returns {Stripe}
 */
export const getStripeClientWithPublishableKey = () => {
  const publishableKey = process.env.NEXT_STRIPE_PUBLISHABLE_KEY;

  return new Stripe(publishableKey, {
    apiVersion: '2020-08-27',
  });
};

/**
 * @returns {Stripe}
 */
export const getStripeClientWithSecretKey = () => {
  const secretKey = process.env.NEXT_STRIPE_PUBLISHABLE_KEY;
  return new Stripe(secretKey, {
    apiVersion: '2020-08-27',
  });
};
