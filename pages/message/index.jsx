import React from 'react';
import SubMessageSection from '../../components/SubPages/MessagePage/SubMessageSection';
import HomeLayout from '../../layouts/HomeLayout';

const Message = () => {
  return (
    <HomeLayout>
      <div className='lg:ml-4 mt-5 mx-auto bg-[#fcfcfc] overflow-hidden'>
        <SubMessageSection />
      </div>
    </HomeLayout>
  );
};

export default Message;