import React from 'react';
import SubNotifications from '../../components/SubPages/NotificationPage/SubNotifications';
import HomeLayout from '../../layouts/HomeLayout';

const Notifications = () => {
  return (
    <HomeLayout>
      <section className="bg-[#fbfbfb]">
        <div className="container">
          <SubNotifications />
        </div>
      </section>
    </HomeLayout>
  );
};

export default Notifications;