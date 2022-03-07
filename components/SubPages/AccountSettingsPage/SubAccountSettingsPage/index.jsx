import React from 'react';
import SettingCard from '../SettingCard';
import styles from './SubAccountSecttings.module.css';

// icons
import { IoIosSettings } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdMessage, MdHelp, MdNotifications } from "react-icons/md";
import { PageHeader } from '../../../Common';

const SubAccountSettingsPage = () => {
  return (
    <div className={styles['sub-account-settings-container']}>
      <div className='mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
        <PageHeader
          title={"Account"}
          userName={"Larissa Smith"}
          userEmail={"larissa@gmail.com"}
        />
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