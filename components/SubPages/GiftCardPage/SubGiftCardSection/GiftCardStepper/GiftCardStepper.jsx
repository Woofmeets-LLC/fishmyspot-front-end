import { useState } from 'react';
import SubStripeWrapper from '../../../PaymentReservationPage/SubCheckout/SubStripeWrapper';
import GiftCardForm from '../GiftCardForm';
import GiftCardBillingInfo from '../GiftCardForm/GiftCardBillingInfo';
import GiftCardCheckoutForm from '../GiftCardForm/GiftCardCheckoutForm';
import GiftCardPaymentError from '../GiftCardPaymentError';
import GiftCardPaymentSuccess from '../GiftCardPaymentSuccess';

const GiftCardStepper = () => {
  const [step, setStep] = useState(0);
  const [isError, setIsError] = useState(false);

  console.log({ step });

  const getStepItems = () => {
    switch (step) {
      case 0:
        return <GiftCardForm step={step} setStep={setStep} />;
      case 1:
        return <GiftCardBillingInfo step={step} setStep={setStep} />;

      case 2:
        return (
          <SubStripeWrapper>
            <GiftCardCheckoutForm
              step={step}
              setStep={setStep}
              setIsError={setIsError}
            />
          </SubStripeWrapper>
        );

      case 3:
        return isError ? <GiftCardPaymentError /> : <GiftCardPaymentSuccess />;
      default:
        return null;
    }
  };
  return <div className="w-full pt-6 md:pt-0">{getStepItems()}</div>;
};

export default GiftCardStepper;
