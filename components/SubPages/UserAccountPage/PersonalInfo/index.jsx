import React from 'react';
import InfoInput from '../PersonalInfoElement/InfoInput';
import InfoSelect from '../PersonalInfoElement/InfoSelectBox/InfoSelect';
import InfoSelectOption from '../PersonalInfoElement/InfoSelectBox/InfoSelectOption';

const PersonalInfo = () => {
  return (
    <div className='bg-white md:w-[600px] lg:w-[700px] 2xl:w-[746px] py-5 px-4 sm:p-5 md:p-8 2xl:pl-11 2xl:pt-11 2xl:pr-16 2xl:pb-12 shadow-md rounded-xl'>
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 lg:mb-5">
        <InfoInput
          name="firstName"
          label="First Name"
          placeholder="John"
        />
        <InfoInput
          name="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 lg:mb-5">
        <InfoSelect
          label="Title"
          name="title"
        >
          <InfoSelectOption title="Mr" value="mr" />
          <InfoSelectOption title="Mrs" value="mrs" />
        </InfoSelect>
        <InfoInput
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
        />
      </div>
      <div className="mb-3 lg:mb-5">
        <InfoInput
          name="email"
          label="Email"
          type="email"
          placeholder="john.doe@gmail.com"
        />
      </div>
      <div className="mb-3 lg:mb-5">
        <InfoInput
          name="phone"
          label="Phone Number"
          type="text"
          placeholder="Phone Number"
        />
      </div>
      <div className="mb-3 lg:mb-5">
        <InfoInput
          name="address"
          label="Address"
          type="text"
          placeholder="Enter your address"
        />
      </div>
      <div className="text-right">
        <button
          className="py-1 px-3 md:py-2 md:px-4 lg:px-5 2xl:py-3 2xl:px-6 text-base 2xl:text-lg text-white font-trade-gothic-bold bg-secondary rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;