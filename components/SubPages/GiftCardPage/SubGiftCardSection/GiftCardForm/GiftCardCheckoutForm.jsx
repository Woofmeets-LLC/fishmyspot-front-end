/* eslint-disable react-hooks/exhaustive-deps */
import { useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const GiftCardCheckoutForm = ({ step, setStep, setIsError }) => {
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  let cardElement;

  useEffect(() => {
    cardElement = elements?.create('card');
    cardElement?.mount('#card-element');
  }, []);

  const { giftCardData, auth } = useSelector((state) => state);

  const billing_details = {
    name: giftCardData?.name,
    email: giftCardData?.email,
    phone: giftCardData?.phone,
    address: giftCardData?.address,
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const requestData = {
      return_url: 'http://localhost:3000/',
      payment_method: {
        card: cardElement,
        billing_details,
      },
    };

    setLoading(true);

    axios
      .post('/api/giftcard/buy-card', {
        amount: giftCardData?.amount,
        description: `$${giftCardData?.amount} gift card for ${
          giftCardData?.recipientEmail
        } ${auth?.user?.id ? auth?.user?.id : ''}`,
        user_id: auth?.user?.id || 'anonymous',
      })
      .then(async ({ data: { client_secret } }) => {
        const result = await stripe.confirmCardPayment(
          client_secret,
          requestData
        );
        if (result.error) {
          setLoading(false);
          // Show error to your customer (for example, payment details incomplete)
          console.log(result.error.message);
        } else {
          fetch('http://localhost:5000/giftcards/promo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              code: result?.paymentIntent?.id,
              email: giftCardData?.recipientEmail,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log({ res });
              const data = {
                service_id: 'service_0z8txkg',
                template_id: 'template_f48yvbp',
                user_id: 'D9WeGnhaGJceVldKx',
                template_params: {
                  from_name: giftCardData?.name,
                  reply_to: giftCardData?.recipientEmail,
                  message: giftCardData?.message,
                  amount: giftCardData?.amount,
                  coupon_code: res?.promo,
                },
              };
              fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-Type': 'application/json',
                },
              }).then(() => {
                setStep(step + 1);
                setLoading(false);
              });
            })
            .catch((err) => {
              toast.error('Something went wrong. Please try again!');
              setLoading(false);
              setIsError(true);
              setStep(step + 1);
            });

          // Your customer will be redirected to your `return_url`. For some payment
          // methods like iDEAL, your customer will be redirected to an intermediate
          // site first to authorize the payment, then redirected to the `return_url`.
        }
      });
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <p className="mb-2 font-trade-gothic-bold text-lg text-primary lg:mb-5">
        Credit Card Info
      </p>
      <div id="card-element"></div>

      <div className="grid grid-cols-2">
        <div className="flex justify-start">
          <button
            onClick={() => setStep(step - 1)}
            className="rounded bg-secondary py-2 px-3 font-trade-gothic-bold text-lg text-primary 2xl:py-3"
          >
            Go Back
          </button>
        </div>
        <div className="flex justify-end">
          <button
            type={loading ? 'button' : 'submit'}
            className={`flex items-center justify-center rounded bg-secondary py-2 px-3 font-trade-gothic-bold text-lg text-primary 2xl:py-3`}
          >
            {loading && (
              <span className="flex w-7 animate-spin items-center justify-center">
                <span className="h-5 w-5 rounded-full border-t-2 border-b-2 border-white"></span>
              </span>
            )}
            {loading ? 'Loading...' : `Buy Now`}
          </button>
        </div>
      </div>
    </form>
  );
};

export default GiftCardCheckoutForm;
