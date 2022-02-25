import React from 'react';
import SubHelpSection from '../../components/SubPages/HelpPage/SubHelpSection';
import HomeLayout from '../../layouts/HomeLayout';

const Help = () => {
  return (
    <HomeLayout>
      <section className="bg-[#fbfbfb]">
        <div className="container">
          <SubHelpSection />
        </div>
      </section>
    </HomeLayout>
  );
};

export default Help;