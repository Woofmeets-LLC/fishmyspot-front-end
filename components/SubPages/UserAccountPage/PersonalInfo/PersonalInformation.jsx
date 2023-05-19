import React from 'react';
import { FormInput, PhoneNumberInput } from '../../../Common';

const PersonalInformation = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <FormInput
          name="firstName"
          label="First Name"
          placeholder="John"
          type="text"
        />
        <FormInput
          name="lastName"
          label="Last Name"
          placeholder="Doe"
          type="text"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <FormInput name="dateOfBirth" label="Date of Birth" type="date" />
        <PhoneNumberInput
          name="phone"
          label="Phone Number"
          placeholder="Phone Number"
        />
      </div>
      <div className="mb-3">
        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="john.doe@gmail.com"
          disabled
        />
      </div>
      <div className="mb-3 lg:mb-5">
        <FormInput
          name="address"
          label="Address"
          type="text"
          placeholder="Enter your address"
        />
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-secondary py-1 px-3 font-trade-gothic-bold text-base text-white md:py-2 md:px-4 lg:px-5 2xl:py-3 2xl:px-6 2xl:text-lg"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
