import React from 'react';
import { FaHeart, FaClipboardList } from "react-icons/fa";
// icons
import { IoIosSettings } from "react-icons/io";
import { MdHelp, MdMessage } from "react-icons/md";
import { BiMessageRoundedError } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { PageHeader } from '../../../Common';
import SettingCard from '../SettingCard';


const SubAccountSettingsPage = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className="pt-6 sm:pt-8 md:pt-10 xl:pt-16 2xl:pt-[76px] pb-10 sm:pb-14 md:pb-20 lg:pb-24 2xl:pb-[180px]">
      <div className='mb-4 sm:mb-6 md:mb-8 lg:mb-10'>
        <PageHeader
          title={"Account"}
          userName={user?.profile?.firstName + " " + user?.profile?.lastName}
          userEmail={user?.email}
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 xl:gap-x-7 xl:gap-y-9">
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
          Icon={FaClipboardList}
          href={"/purchase-list"}
        />
        <SettingCard
          title={"Message"}
          description={"Communicate with pond owners regarding upcoming reservations."}
          Icon={MdMessage}
          href={"/messages"}
        />
        <SettingCard
          title={"Help"}
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
          Icon={BiMessageRoundedError}
          href={"/faq"}
        />
        <SettingCard
          title={"Gift Card"}
          description={"Gather more information before your fishing trip."}
          Icon={BiMessageRoundedError}
          href={"/create-gift-card"}
        />
      </div>
    </div>
  );
};

export default SubAccountSettingsPage;