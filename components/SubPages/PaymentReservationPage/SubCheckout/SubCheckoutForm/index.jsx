/* eslint-disable react-hooks/exhaustive-deps */
import {
    useElements, useStripe
} from '@stripe/react-stripe-js';
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { getSdk } from '../../../../../sharetribe/sharetribeSDK';

const SubCheckoutForm = ({ setStep, id, secret, billing_details }) => {
    const [loading, setLoading] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    let cardElement;

    useEffect(() => {
        cardElement = elements?.create("card");
        cardElement?.mount('#card-element')
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (document.getElementById("agree-with-terms").dataset.isAgree != 'true') {
            toast.error("You have to be agree with terms and conditions!", { duration: 4000 });
            // will not read below code is the user is not agree with terms and condition
            return;
        }

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const requestData = {
            return_url: 'http://localhost:3000/' + id,
            payment_method: {
                card: cardElement,
                billing_details: {
                    ...billing_details
                }
            }
        }

        setLoading(true);
        try {
            const result = await stripe.confirmCardPayment(secret, requestData);

            if (result.error) {
                setLoading(false);
                // Show error to your customer (for example, payment details incomplete)
                toast.error(result.error.message, { duration: 4000 });

            } else {
                getSdk().transactions.transition({
                    id: id,
                    transition: "transition/confirm-payment",
                    params: {}
                }, {
                    expand: true
                })
                    .then(sdkResult => {
                        setLoading(false);
                        setStep(prevStep => prevStep + 1);
                    })
                    .catch(sdkError => {
                        setLoading(false);
                        console.dir(sdkError);
                    })
            }
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <p className='text-lg font-trade-gothic-bold text-primary mb-2 lg:mb-5'>Credit Card Info</p>
            <div id="card-element"></div>

            <button
                type={loading ? "button" : "submit"}
                className={`flex justify-center items-center w-full bg-secondary text-sm md:text-base 2xl:text-xl font-trade-gothic-bold text-white py-2 px-3 sm:py-3 2xl:py-5 mt-4 rounded`}>
                {
                    loading &&
                    <span className="animate-spin flex justify-center items-center w-7">
                        <span className="rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                    </span>
                }
                {
                    loading
                        ? "Loading..."
                        : `Confirm Booking`
                }

            </button>
        </form>
    )
};

export default SubCheckoutForm