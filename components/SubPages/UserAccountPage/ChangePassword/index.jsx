import React from 'react';
import InfoInput from '../PersonalInfoElement/InfoInput';

const ChangePassword = () => {
  return (
    <div className='bg-white md:w-[600px] lg:w-[700px] 2xl:w-[746px] py-5 px-4 sm:p-5 md:p-8 2xl:pl-11 2xl:pt-11 2xl:pr-16 2xl:pb-12 shadow-md rounded-xl'>
      <div className="mb-3 lg:mb-5">
        <InfoInput
          name="currentPassword"
          label="Current Password"
          type="password"
          placeholder="current password"
        />
      </div>
      <div className="mb-3 lg:mb-5">
        <InfoInput
          name="newPassword"
          label="New Password"
          type="password"
          placeholder="new password"
        />
      </div>
      <div className="mb-3 lg:mb-5">
        <InfoInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="confirm password"
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

export default ChangePassword;