import { loadStripe } from "@stripe/stripe-js/pure";
import { TokenResult } from "@stripe/stripe-js";

/**
 *
 * @param {*} obj
 * @returns {TokenResult}
 */
export const createStripeAccountToken = async (obj) => {
  try {
    if (!process.env.NEXT_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe Public Key is undefined");
    }

    const stripe = await loadStripe(process.env.NEXT_STRIPE_PUBLISHABLE_KEY);

    const accountToken = await stripe.createToken("account", {
      business_type: obj?.[".inp-company-type"],
      company: {
        name: obj?.[".inp-company-name"],
        address: {
          line1: obj?.[".inp-company-street-address1"],
          city: obj?.[".inp-company-city"],
          state: obj?.[".inp-company-state"],
          postal_code: obj?.[".inp-company-zip"],
        },
      },
      tos_shown_and_accepted: true,
    });

    console.log(accountToken);
    return accountToken;
  } catch (error) {
    console.log(error);
  }
};
