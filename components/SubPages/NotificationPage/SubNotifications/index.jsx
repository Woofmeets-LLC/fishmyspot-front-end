import React from 'react';
import NotificationCard from '../NotificationCard';
import styles from './SubNotifications.module.css';

const SubNotifications = () => {
  return (
    <div className={styles['sub-notification-container']}>
      <div className='pb-4 md:pb-6 xl:pb-9'>
        <h1 className={styles['sub-notification-title']}>
          NOTIFICATION
        </h1>
      </div>
      <div className='space-y-6 lg:space-y-9'>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
};

export default SubNotifications;