import React from 'react';
import ChangePassword from '../ChangePassword';
import PersonalInfo from '../PersonalInfo';
import UserAccountSectionTitle from '../UserAccountSectionTitle';

const SubUserAccountSection = () => {
  return (
    <div className='pb-32'>
      <div className="text-primary space-y-2 md:space-y-3 lg:space-y-5 mb-5 md:mb-6 lg:mb-10 pt-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-food-truck uppercase">Account</h1>
        <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-trade-gothic">Larissa Smith, larissa@gmail.com</p>
      </div>
      <UserAccountSectionTitle title={"Personal Info"} />
      <PersonalInfo />
      <div className="mt-12">
        <UserAccountSectionTitle title={"Change Password"} />
      </div>
      <ChangePassword />
    </div>
  );
};

export default SubUserAccountSection;