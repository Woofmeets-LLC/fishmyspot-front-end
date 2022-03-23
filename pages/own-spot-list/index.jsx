import React from 'react';
import SubEditSpotListSection from '../../components/SubPages/EditSpotListPage/SubEditSpotListSection';
import HomeLayout from '../../layouts/HomeLayout';

const EditSpotList = () => {
  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: "owner",
        fallbackUrl: "/",
      }}>
      <div className='container'>
        <SubEditSpotListSection />
      </div>
    </HomeLayout>
  );
};

export default EditSpotList;