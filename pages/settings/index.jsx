import React from 'react';
import SubAccountSettingsPage from '../../components/SubPages/AccountSettingsPage/SubAccountSettingsPage';
import HomeLayout from '../../layouts/HomeLayout';

const Settings = () => {
  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: "angler",
        fallbackUrl: "/",
      }}>
      <section className="bg-[#fbfbfb]">
        <div className="container">
          <SubAccountSettingsPage />
        </div>
      </section>
    </HomeLayout>
  );
};

export default Settings;