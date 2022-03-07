import Stripe from "stripe";

/**
 *
 * @returns {Stripe}
 */
export const getStripeClientWithPublishableKey = () => {
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;

  return new Stripe(publishableKey, {
    apiVersion: "2020-08-27",
  });
};

/**
 * @returns {Stripe}
 */
export const getStripeClientWithSecretKey = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  return new Stripe(secretKey, {
    apiVersion: "2020-08-27",
  });
};

/**
 *
 * @param {Stripe.AccountCreateParams} data
 * @returns {Promise<Stripe.Response<Stripe.Account>>}
 */
export const createStripeUserAccount = async (data) => {
  const {
    account_token,
    business_profile,
    business_type,
    capabilities,
    company,
    country,
    default_currency,
    documents,
    email,
    expand,
    external_account,
    individual,
    metadata,
    settings,
    tos_acceptance,
    type,
  } = data;
  const client = getStripeClientWithSecretKey();

  // https://stripe.com/docs/connect/account-tokens#create-account

  return client.accounts.create({
    account_token,
    business_profile,
    business_type,
    capabilities,
    company,
    country,
    default_currency,
    documents,
    email,
    expand,
    external_account,
    individual,
    metadata,
    settings,
    tos_acceptance,
    type,
  });
};
