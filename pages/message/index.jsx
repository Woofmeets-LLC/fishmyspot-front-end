import React from 'react';
import SubMessageSection from '../../components/SubPages/MessagePage/SubMessageSection';
import Header from '../../layouts/HomeLayout/Header';

const Message = () => {
  return (
    <>
      <Header />
      <div className='ml-4 mt-5 mx-auto bg-[#fcfcfc] overflow-hidden'>
        <SubMessageSection />
      </div>
    </>
  );
};

export default Message;