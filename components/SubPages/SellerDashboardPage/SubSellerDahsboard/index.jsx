import React from 'react';
import { IoIosSettings } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { useSelector } from 'react-redux';
import { PageHeader } from '../../../Common';
import SettingCard from '../../AccountSettingsPage/SettingCard';
import styles from './SubSellerDashboard.module.css';

const SubSellerDashboard = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className={styles['sub-seller-dashboard-container']}>
      <PageHeader
        title={"Account"}
        userName={user?.profile?.firstName + " " + user?.profile?.lastName}
        userEmail={user?.email}
      />
      <div className={styles['sub-settings-items']}>
        <SettingCard
          title={"Account Settings"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href="/user-account"
        />
        <SettingCard
          title={"Own Spot list"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href="/own-spot-list"
        />
        {/* <SettingCard
          title={"Notification"}
          description={"Provide personal details and how we can reach you."}
          Icon={MdNotifications}
          href={"/notifications"}
        /> */}
        <SettingCard
          title={"Book list"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href={"/seller-dashboard/booked-list"}
        />
        <SettingCard
          title={"Message"}
          description={"Provide personal details and how we can reach you."}
          Icon={MdMessage}
          href={"/messages"}
        />
        {/* <SettingCard
          title={"Cacellation"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href={"/cancellation"}
        /> */}
      </div>
    </div>
  );
};

export default SubSellerDashboard;