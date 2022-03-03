import React from 'react';
import Select from '../FormikElement/FormikSelectBox/Select';
import SelectOption from '../FormikElement/FormikSelectBox/SelectOption';
import BillingInfoInput from './BillingInfoInput';

const SubBillingInfo = () => {
  return (
    <div className='mb-6 md:mb-0'>
      <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-food-truck text-primary uppercase mb-4 lg:mb-8'>Billing Info</h1>
      <div>
        <p className='text-lg font-trade-gothic-bold text-primary mb-2 lg:mb-5'>Credit Card Info</p>
        <div className='mb-6 lg:mb-10'>
          <BillingInfoInput name="cardNumber" label="Credit Card" placeholder="Card Number" />
        </div>
        <p className='text-lg font-trade-gothic-bold text-primary mb-2 lg:mb-5'>Biling Details</p>
        <div className='grid grid-cols-2 gap-x-3 gap-y-5 mb-5'>
          <BillingInfoInput name="email" type="email" label="Email" placeholder="Email" />
          <BillingInfoInput name="companyName" label="Company Name" placeholder="Company Name" />
          <BillingInfoInput name="vatNumber" label="Vat Number" placeholder="Vat Number" />
          <BillingInfoInput name="billingAddress" label="Billing Address" placeholder="Billing Address" />
          <BillingInfoInput name="zipCode" label="ZIP Code" placeholder="Zip Code" />
          <BillingInfoInput name="city" label="City" placeholder="City" />
        </div>
        <Select label="Country" name="country">
          <SelectOption title="Select one" value="" />
          <SelectOption title="United States" value="usa" />
          <SelectOption title="United Kingdom" value="uk" />
          <SelectOption title="Canada" value="canada" />
        </Select>
      </div>
    </div>
  );
};

export default SubBillingInfo;