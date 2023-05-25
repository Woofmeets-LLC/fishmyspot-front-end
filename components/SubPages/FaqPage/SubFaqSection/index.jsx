import { useSelector } from 'react-redux';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import AnglerFAQ from './AnglerFAQ';
import OwnerFAQ from './OwnerFAQ';

const SubFaqSection = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="mx-auto pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-10 md:pb-20 lg:pb-24 xl:w-[1024px] xl:pt-16 2xl:pt-20 2xl:pb-52 3xl:w-[1180px]">
      {user?.profile?.publicData?.account_type === 'owner' ? (
        <OwnerFAQ />
      ) : (
        <AnglerFAQ />
      )}
    </div>
  );
};

export default SubFaqSection;
