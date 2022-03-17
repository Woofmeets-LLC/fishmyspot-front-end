import { useField } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';

const SubBillingInfo = () => {

  const [tranField] = useField("tran");
  const [skField] = useField("sk");

  const { push } = useRouter();

  tranField.value && skField.value && push(`/payment-reservation/payment?tran=${tranField.value}&sk=${skField.value}`);;
  return (
    <div className='mb-6 md:mb-0'>
      <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-food-truck text-primary uppercase mb-4 lg:mb-8'>Billing Info</h1>
      <div>
        <p className='text-lg font-trade-gothic-bold text-primary mb-2 lg:mb-5'>Credit Card Info</p>
        <div className='mb-6 lg:mb-10'>
          {/* <BillingInfoInput name="cardNumber" label="Credit Card" placeholder="Card Number" />
          {
            tranField.value && skField.value &&
            <SubStripeWrapper>
              <SubCheckoutForm
                id={tranField.value}
                secret={skField.value} />
            </SubStripeWrapper>
          } */}
        </div>
      </div>
    </div>
  );
};

export default SubBillingInfo;