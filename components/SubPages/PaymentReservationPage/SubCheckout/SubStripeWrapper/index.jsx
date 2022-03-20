import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from 'react';

const SubStripeWrapper = ({ children }) => {
    const [customLoadStripe, setCustomLoadStripe] = useState(null);

    useEffect(() => {
        const getLoad = async () => {
            try {
                const load = await loadStripe('pk_test_51JDrfGL6dPTcqE42bUjVOMBz9IlrztzO3WQSLYuIsVaQik9uBgC5l3ubS3NngycpFfOZDAXHHBDzL9CghHFjkkzd00LKieQOlz');
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