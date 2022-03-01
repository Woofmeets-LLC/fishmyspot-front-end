import React from 'react';
import BillingInfoInput from './BillingInfoInput';
import BillingInfoSelect from './BillingInfoSelect';

const SubBillingInfo = () => {
  return (
    <div>
      <BillingInfoInput name="cardNumber" label="Credit Card" placeholder="Card Number" />
      <BillingInfoInput name="email" type="email" label="Email" placeholder="Email" />
      <BillingInfoInput name="companyName" label="Company Name" placeholder="Company Name" />
      <BillingInfoInput name="vatNumber" label="Vat Number" placeholder="Vat Number" />
      <BillingInfoInput name="billingAddress" label="Billing Address" placeholder="Billing Address" />
      <BillingInfoInput name="zipCode" label="ZIP Code" placeholder="Zip Code" />
      <BillingInfoInput name="city" label="City" placeholder="City" />
      <BillingInfoSelect />

      <button type='submit'>Confirm Booking</button>
    </div>
  );
};

export default SubBillingInfo;