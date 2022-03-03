import React, { useState } from 'react';
import Drawer from 'react-modern-drawer'
import styles from './SubHelpSection.module.css';
import SubSideBar from '../SubSideBar';
import SubContentArea from '../SubContentArea';

import { AiOutlineBars } from "react-icons/ai";

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const SubHelpSection = () => {
  const [isShowContent, setIsShowContent] = useState('');

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className={styles['sub-help-section-container']}>
      <div className={styles['sub-help-section-heading-wrapper']}>
        <h1 className={styles['sub-help-section-heading']}>Help</h1>
        <p className={styles['sub-help-settings-user-info']}>Larissa Smith, larissa@gmail.com</p>
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