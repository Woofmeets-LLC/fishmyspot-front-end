import { AiTwotoneBank } from 'react-icons/ai';
import { FaClipboardList } from 'react-icons/fa';
import { GiBoatFishing } from 'react-icons/gi';
import { IoIosSettings } from 'react-icons/io';
import { MdMessage } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { PageHeader } from '../../../Common';
import SettingCard from '../../AccountSettingsPage/SettingCard';

const SubSellerDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-10 md:pb-20 lg:pb-24 xl:pt-16 2xl:pt-[76px] 2xl:pb-[180px]">
      <PageHeader
        title={'Account'}
        userName={user?.profile?.firstName + ' ' + user?.profile?.lastName}
        userEmail={user?.email}
      />
      <div className="mt-5 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:gap-x-7 xl:gap-y-9">
        <SettingCard
          title={'Account Settings'}
          description={'Provide personal details and how we can reach you.'}
          Icon={IoIosSettings}
          href="/user-account"
        />
        <SettingCard
          title={'My Pond Listings'}
          description={'Edit private pond listing(s).'}
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
          title={'Pond Reservations'}
          description={'View all of your reservations.'}
          Icon={FaClipboardList}
          href={'/seller-dashboard/booked-list'}
        />
        <SettingCard
          title={'Message'}
          description={
            'Communicate with anglers regarding upcoming reservations.'
          }
          Icon={MdMessage}
          href={'/messages'}
        />
        {/* <SettingCard
          title={"Cacellation"}
          description={"Provide personal details and how we can reach you."}
          Icon={IoIosSettings}
          href={"/cancellation"}
        /> */}
        <SettingCard
          title={'Manage Bank Account'}
          description={'Take your payment through the bank.'}
          Icon={AiTwotoneBank}
          href={'/bank-account'}
        />
      </div>
    </div>
  );
};

export default SubSellerDashboard;
