/* eslint-disable react-hooks/exhaustive-deps */
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

const GiftCardCheckoutForm = () => {
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  let cardElement;

  useEffect(() => {
    cardElement = elements?.create('card');
    cardElement?.mount('#card-element');
  }, []);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <p className="mb-2 font-trade-gothic-bold text-lg text-primary lg:mb-5">
        Credit Card Info
      </p>
      <div id="card-element"></div>

      <button
        type={loading ? 'button' : 'submit'}
        className={`mt-4 flex w-full items-center justify-center rounded bg-secondary py-2 px-3 font-trade-gothic-bold text-sm text-white sm:py-3 md:text-base 2xl:py-5 2xl:text-xl`}
      >
        {loading && (
          <span className="flex w-7 animate-spin items-center justify-center">
            <span className="h-5 w-5 rounded-full border-t-2 border-b-2 border-white"></span>
          </span>
        )}
        {loading ? 'Loading...' : `Buy Now`}
      </button>
    </form>
  );
};

export default GiftCardCheckoutForm;
