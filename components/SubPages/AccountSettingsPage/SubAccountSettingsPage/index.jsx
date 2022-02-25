import React from 'react';
import SettingCard from '../SettingCard';
import styles from './SubAccountSecttings.module.css';

// icons
import { IoIosSettings } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdMessage, MdHelp, MdNotifications } from "react-icons/md";

const SubAccountSettingsPage = () => {
  return (
    <div className={styles['sub-account-settings-container']}>
      <div className={styles['sub-account-settings']}>
        <h1 className={styles['sub-account-settings-title']}>Account</h1>
        <p className={styles['sub-account-settings-user-info']}>Larissa Smith, larissa@gmail.com</p>
      </div>
      <div className={styles['sub-account-settings-items']}>
        <SettingCard
          title={"Account Settings"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
        />
        <SettingCard
          title={"Cancellation"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
        />
        <SettingCard
          title={"Favourites"}
          description={"Provide personal details and how we can reach you."}
          Icon={FaHeart}
        />
        <SettingCard
          title={"Purchase list"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
        />
        <SettingCard
          title={"Message"}
          description={"Provide personal details and how we can reach you."}
          Icon={MdMessage}
        />
        <SettingCard
          title={"Helps"}
          description={"Provide personal details and how we can reach you."}
          Icon={MdHelp}
        />
        <SettingCard
          title={"Notification"}
          description={"Provide personal details and how we can reach you."}
          Icon={MdNotifications}
        />
        <SettingCard
          title={"Review"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
        />
        <SettingCard
          title={"FAQ"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
        />
      </div>
    </div>
  );
};

export default SubAccountSettingsPage;