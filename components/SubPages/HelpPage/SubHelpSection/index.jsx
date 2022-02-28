import React, { useState } from 'react';
import styles from './SubHelpSection.module.css';
import SubSideBar from '../SubSideBar';
import SubContentArea from '../SubContentArea';

const SubHelpSection = () => {

  return (
    <div className={styles['sub-help-section-container']}>
      <div className={styles['sub-help-section-heading-wrapper']}>
        <h1 className={styles['sub-help-section-heading']}>Help</h1>
        <p className={styles['sub-help-settings-user-info']}>Larissa Smith, larissa@gmail.com</p>
      </div>
      <div className='grid grid-cols-12 md:gap-14 xl:gap-24'>
        <div className='col-span-4'>
          <SubSideBar />
        </div>
        <div className='col-span-8 mt-7'>
          <SubContentArea />
        </div>
      </div>
    </div>
  );
};

export default SubHelpSection;