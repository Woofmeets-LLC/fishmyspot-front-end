import React from 'react';
import SubSidebar from '../SubSidebar';
import SubBody from '../SubBody';


const SubMessageSection = () => {
  return (
    <div className="w-full grid grid-cols-12 md:gap-x-[30px]">
      <div className="col-span-2 lg:col-span-4">
        <SubSidebar />
      </div>
      <div className="col-span-10 lg:col-span-8">
        <SubBody />
      </div>
    </div>
  );
};

export default SubMessageSection;