import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

const SubStripeWrapper = ({ children }) => {
  const [customLoadStripe, setCustomLoadStripe] = useState(null);

  useEffect(() => {
    const getLoad = async () => {
      try {
        const load = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
        setCustomLoadStripe(load);
      } catch (err) {
        setCustomLoadStripe(null);
      }
    };
    getLoad();
  }, []);

  return customLoadStripe ? (
    <Elements stripe={customLoadStripe}>{children}</Elements>
  ) : null;
};

export default SubStripeWrapper;
