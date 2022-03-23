import React from 'react';
import SubUserAccountSection from '../../components/SubPages/UserAccountPage/SubUserAccountSection';
import HomeLayout from '../../layouts/HomeLayout';

const UserAccount = () => {
  return (
    <HomeLayout isPrivate>
      <div className="bg-[#fbfbfb]">
        <div className='container'>
          <SubUserAccountSection />
        </div>
      </div>
    </HomeLayout>
  );
};

export default UserAccount;