import { useSelector } from 'react-redux';
import { PageHeader } from '../../../Common';
import ChangePassword from '../ChangePassword';
import PersonalInfo from '../PersonalInfo';
import UserAccountSectionTitle from '../UserAccountSectionTitle';

const SubUserAccountSection = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className='pb-12 sm:pb-16 md:pb-20 lg:pb-28 2xl:pb-32'>
      <div className="text-primary space-y-2 md:space-y-3 lg:space-y-5 mb-5 md:mb-6 lg:mb-10 pt-6 sm:pt-12 lg:pt-16 2xl:pt-20">
        <PageHeader
          title={"Account"}
          userName={user?.profile?.firstName + " " + user?.profile?.lastName}
          userEmail={user?.email}
        />
      </div>
      <UserAccountSectionTitle title={"Personal Info"} />
      <PersonalInfo />
      <div className="mt-5 md:mt-8 xl:mt-12">
        <UserAccountSectionTitle title={"Change Password"} />
      </div>
      <ChangePassword />
    </div>
  );
};

export default SubUserAccountSection;