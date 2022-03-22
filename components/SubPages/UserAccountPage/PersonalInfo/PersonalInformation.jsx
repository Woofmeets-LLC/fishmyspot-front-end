import React from 'react';
import { FormInput } from '../../../Common';

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
        <FormInput
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
        />
        <FormInput
          name="phone"
          label="Phone Number"
          type="text"
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
          className="py-1 px-3 md:py-2 md:px-4 lg:px-5 2xl:py-3 2xl:px-6 text-base 2xl:text-lg text-white font-trade-gothic-bold bg-secondary rounded"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;