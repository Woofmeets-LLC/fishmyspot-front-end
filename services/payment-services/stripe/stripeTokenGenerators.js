import { loadStripe } from "@stripe/stripe-js/pure";
import { TokenResult } from "@stripe/stripe-js";
import { getStripeClientWithSecretKey } from "./loaders";

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

/**
 * @param {{
 *    country: string;
 *    currency: string;
 *    account_holder_name:string;
 *    account_holder_type: "company"|"individual";
 *    routing_number: string;
 *    account_number: string;
 * }} obj
 * @returns
 */
export const createStripeBusinessToken = async (obj) => {
  try {
    const stripe = getStripeClientWithSecretKey();
    const result = await stripe.tokens.create({
      bank_account: {
        country: obj?.["country"],
        currency: obj?.["currency"],
        account_holder_name: obj?.["account_holder_name"],
        account_holder_type: obj?.["account_holder_type"],
        routing_number: obj?.["routing_number"],
        account_number: obj?.["account_number"],
      },
    });
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};
