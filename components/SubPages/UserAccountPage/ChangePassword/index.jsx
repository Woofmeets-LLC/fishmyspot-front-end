import React from 'react';
import InfoInput from '../PersonalInfoElement/InfoInput';

const ChangePassword = () => {
  return (
    <div className='bg-white w-[746px] pl-11 pt-11 pr-16 pb-12 shadow-md rounded-xl'>
      <div className="mb-5">
        <InfoInput
          name="currentPassword"
          label="Current Password"
          type="password"
          placeholder="current password"
        />
      </div>
      <div className="mb-5">
        <InfoInput
          name="newPassword"
          label="New Password"
          type="password"
          placeholder="new password"
        />
      </div>
      <div className="mb-5">
        <InfoInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="confirm password"
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

export default ChangePassword;