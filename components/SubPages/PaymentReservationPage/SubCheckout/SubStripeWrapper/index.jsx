import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from 'react';

const SubStripeWrapper = ({ children }) => {
    const [customLoadStripe, setCustomLoadStripe] = useState(null);

    useEffect(() => {
        const getLoad = async () => {
            try {
                const load = await loadStripe(process.env.NEXT_STRIPE_PUBLISHABLE_KEY);
                setCustomLoadStripe(load);
                console.log("load", load);
            } catch (err) {
                setCustomLoadStripe(null);
                console.dir("err", err);
            }
        }
        getLoad();
    }, []);

    return (
        customLoadStripe
            ? <Elements stripe={customLoadStripe}>
                {children}
            </Elements>
            : null
    )
}

export default SubStripeWrapper