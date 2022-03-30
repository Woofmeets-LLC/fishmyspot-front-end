import React from 'react';
import { FaHeart } from "react-icons/fa";
// icons
import { IoIosSettings } from "react-icons/io";
import { MdHelp, MdMessage } from "react-icons/md";
import { useSelector } from 'react-redux';
import { PageHeader } from '../../../Common';
import SettingCard from '../SettingCard';
import styles from './SubAccountSecttings.module.css';


const SubAccountSettingsPage = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className={styles['sub-account-settings-container']}>
      <div className='mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
        <PageHeader
          title={"Account"}
          userName={user?.profile?.firstName + " " + user?.profile?.lastName}
          userEmail={user?.email}
        />
      </div>
      <div className={styles['sub-account-settings-items']}>
        <SettingCard
          title={"Account Settings"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href={"/user-account"}
        />
        {/* <SettingCard
          title={"Cancellation"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href={"/cancellation"}
        /> */}
        <SettingCard
          title={"Favorites"}
          description={"All your favorite ponds in one spot."}
          Icon={FaHeart}
          href={"/favorite-pond-list"}
        />
        <SettingCard
          title={"Purchase List"}
          description={"All your reservations are listed here."}
          Icon={IoIosSettings}
          href={"/purchase-list"}
        />
        <SettingCard
          title={"Message"}
          description={"Communicate with pond owners regarding upcoming reservations."}
          Icon={MdMessage}
          href={"/messages"}
        />
        <SettingCard
          title={"Help(s)"}
          description={"Click here to get additional support regarding your account."}
          Icon={MdHelp}
          href={"/help"}
        />
        {/* <SettingCard
          title={"Notification"}
          description={"Provide personal details and how we can reach you."}
          Icon={MdNotifications}
          href={"/notification"}
        /> */}
        {/* <SettingCard
          title={"Review"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href={"#"}
        /> */}
        <SettingCard
          title={"FAQ"}
          description={"Gather more information before your fishing trip."}
          Icon={IoIosSettings}
          href={"/faq"}
        />
      </div>
    </div>
  );
};

export default SubAccountSettingsPage;