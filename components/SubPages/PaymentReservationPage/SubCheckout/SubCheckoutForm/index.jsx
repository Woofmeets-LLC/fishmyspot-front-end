/* eslint-disable react-hooks/exhaustive-deps */
import {
    useElements, useStripe
} from '@stripe/react-stripe-js';
import { useEffect } from "react";
import { getSdk } from '../../../../../sharetribe/sharetribeSDK';

const SubCheckoutForm = ({ setStep, id, secret, billing_details }) => {

    const stripe = useStripe();
    const elements = useElements();
    let cardElement;

    useEffect(() => {
        cardElement = elements?.create("card");


        cardElement?.mount('#card-element')
    }, []);



    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const result = await stripe.confirmCardPayment(secret, {
            return_url: 'http://localhost:3000/' + id,
            payment_method: {
                card: cardElement,
                billing_details: {
                    ...billing_details
                }
            }
        });


        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            getSdk().transactions.transition({
                id: id,
                transition: "transition/confirm-payment",
                params: {}
            }, {
                expand: true
            })
                .then(console.log)
                .catch(console.log)
        }
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <p className='text-lg font-trade-gothic-bold text-primary mb-2 lg:mb-5'>Credit Card Info</p>
            <div id="card-element"></div>


            <button type={'submit'}>Confirm Booking</button>
        </form>
    )
};

export default SubCheckoutForm