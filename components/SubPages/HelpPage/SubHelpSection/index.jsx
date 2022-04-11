import { useState } from 'react';
import Drawer from 'react-modern-drawer'
import SubSideBar from '../SubSideBar';
import SubContentArea from '../SubContentArea';

import { AiOutlineBars } from "react-icons/ai";

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { PageHeader } from '../../../Common';
import { useSelector } from 'react-redux';

const SubHelpSection = () => {
  const [isShowContent, setIsShowContent] = useState('');
  const { user } = useSelector(state => state.auth);

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className="pt-6 sm:pt-8 md:pt-10 xl:pt-16 pb-10 sm:pb-14 md:pb-20 lg:pb-24 2xl:pt-20 2xl:pb-52">
      <div className="text-primary space-y-2 md:space-y-3 lg:space-y-5 mb-5 md:mb-6 lg:mb-10">
        {
          user?.email ?
            <PageHeader
              title={"Help"}
              userName={`${user?.profile?.firstName} ${user?.profile?.lastName}`}
              userEmail={`${user?.email}`}
            /> :
            <div className='text-primary space-y-2 md:space-y-3 lg:space-y-5'>
              <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase font-food-truck`}>
                Help
              </h1>
            </div>
        }
      </div>
      <div className='md:grid md:grid-cols-12 md:gap-14 xl:gap-24'>
        <div className='sm:block md:hidden'>
          <>
            <button onClick={toggleDrawer}>
              <AiOutlineBars />
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='left'
              className=' overflow-y-scroll'
            >
              <div className='mt-[70px] p-4'>
                <SubSideBar setIsShowContent={setIsShowContent} />
              </div>
            </Drawer>
          </>
        </div>
        <div className='hidden md:block md:col-span-4'>
          <SubSideBar setIsShowContent={setIsShowContent} />
        </div>
        <div className='md:col-span-8 mt-7'>
          <SubContentArea isShowContent={isShowContent} />
        </div>
      </div>
    </div>
  );
};

export default SubHelpSection;