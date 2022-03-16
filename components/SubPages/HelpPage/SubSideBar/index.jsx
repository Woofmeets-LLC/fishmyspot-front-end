import React from 'react';
import AboutFishMySpot from '../AboutFishMySpot';

const SubSideBar = ({ setIsShowContent }) => {
  return (
    <div className=''>
      <AboutFishMySpot setIsShowContent={setIsShowContent} />
    </div>
  );
};

export default SubSideBar;