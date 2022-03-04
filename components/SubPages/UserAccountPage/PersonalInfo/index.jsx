import React from 'react';
import InfoInput from '../PersonalInfoElement/InfoInput';
import InfoSelect from '../PersonalInfoElement/InfoSelectBox/InfoSelect';
import InfoSelectOption from '../PersonalInfoElement/InfoSelectBox/InfoSelectOption';

const PersonalInfo = () => {
  return (
    <div className='bg-white w-[746px] pl-11 pt-11 pr-16 pb-12 shadow-md rounded-xl'>
      <div className="grid grid-cols-2 gap-4 mb-5">
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
      <div className="grid grid-cols-2 gap-4 mb-5">
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
      <div className="mb-5">
        <InfoInput
          name="email"
          label="Email"
          type="email"
          placeholder="john.doe@gmail.com"
        />
      </div>
      <div className="mb-5">
        <InfoInput
          name="phone"
          label="Phone Number"
          type="text"
          placeholder="Phone Number"
        />
      </div>
      <div className="mb-5">
        <InfoInput
          name="address"
          label="Address"
          type="text"
          placeholder="Enter your address"
        />
      </div>
      <div className="text-right">
        <button
          className="py-3 px-6 text-lg text-white font-trade-gothic-bold bg-secondary rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;