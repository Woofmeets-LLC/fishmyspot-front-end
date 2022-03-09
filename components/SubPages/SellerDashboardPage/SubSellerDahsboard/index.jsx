import React from 'react';
import { IoIosSettings } from "react-icons/io";
import { MdMessage, MdNotifications } from "react-icons/md";
import { PageHeader } from '../../../Common';
import SettingCard from '../../AccountSettingsPage/SettingCard';
import styles from './SubSellerDashboard.module.css';

const SubSellerDashboard = () => {
  return (
    <div className={styles['sub-seller-dashboard-container']}>
      <PageHeader
        title={"Account"}
        userName={"Larissa Smith"}
        userEmail={"larissa@gmail.com"}
      />
      <div className={styles['sub-settings-items']}>
        <SettingCard
          title={"Account Settings"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
        />
        <SettingCard
          title={"Spot list"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href="/edit-spot-list"
        />
        <SettingCard
          title={"Notification"}
          description={"Provide personal details and how we can reach you."}
          Icon={MdNotifications}
        />
        <SettingCard
          title={"Book list"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
        />
        <SettingCard
          title={"Message"}
          description={"Provide personal details and how we can reach you."}
          Icon={MdMessage}
        />
        <SettingCard
          title={"Cacellation"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
        />
      </div>
    </div>
  );
};

export default SubSellerDashboard;