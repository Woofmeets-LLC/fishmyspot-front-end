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
          href={"/user-account"}
        />
        <SettingCard
          title={"Cancellation"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href={"/cancellation"}
        />
        <SettingCard
          title={"Favourites"}
          description={"Provide personal details and how we can reach you."}
          Icon={FaHeart}
          href={"/favorite-pond-list"}
        />
        <SettingCard
          title={"Purchase list"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href={"/purchase-list"}
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
          href={"/help"}
        />
        <SettingCard
          title={"Notification"}
          description={"Provide personal details and how we can reach you."}
          Icon={MdNotifications}
          href={"/notification"}
        />
        <SettingCard
          title={"Review"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href={"#"}
        />
        <SettingCard
          title={"FAQ"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href={"/faq"}
        />
      </div>
    </div>
  );
};

export default SubAccountSettingsPage;