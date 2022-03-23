import React from 'react';
import SubSellerDashboard from '../../components/SubPages/SellerDashboardPage/SubSellerDahsboard';
import HomeLayout from '../../layouts/HomeLayout';

const SellerDashboard = () => {
  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: "owner",
        fallbackUrl: "/",
      }}>
      <div className='container'>
        <SubSellerDashboard />
      </div>
    </HomeLayout>
  );
};

export default SellerDashboard;