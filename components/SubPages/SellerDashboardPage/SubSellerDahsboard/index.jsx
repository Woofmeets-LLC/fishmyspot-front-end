import { IoIosSettings } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { GiBoatFishing } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { PageHeader } from '../../../Common';
import SettingCard from '../../AccountSettingsPage/SettingCard';

const SubSellerDashboard = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className="pt-6 sm:pt-8 md:pt-10 xl:pt-16 2xl:pt-[76px] pb-10 sm:pb-14 md:pb-20 lg:pb-24 2xl:pb-[180px]">
      <PageHeader
        title={"Account"}
        userName={user?.profile?.firstName + " " + user?.profile?.lastName}
        userEmail={user?.email}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 md:gap-5 xl:gap-x-7 xl:gap-y-9">
        <SettingCard
          title={"Account Settings"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href="/user-account"
        />
        <SettingCard
          title={"My Pond Listings"}
          description={"Edit private pond listing(s)."}
          Icon={GiBoatFishing}
          href="/own-spot-list"
        />
        {/* <SettingCard
          title={"Notification"}
          description={"Provide personal details and how we can reach you."}
          Icon={MdNotifications}
          href={"/notifications"}
        /> */}
        <SettingCard
          title={"Pond Reservations"}
          description={"View all of your reservations."}
          Icon={FaClipboardList}
          href={"/seller-dashboard/booked-list"}
        />
        <SettingCard
          title={"Message"}
          description={"Communicate with anglers regarding upcoming reservations."}
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