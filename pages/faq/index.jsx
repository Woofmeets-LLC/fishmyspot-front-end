import React from 'react';
import SubFaqSection from '../../components/SubPages/FaqPage/SubFaqSection';
import HomeLayout from '../../layouts/HomeLayout';

const Faq = () => {
  return (
    <HomeLayout>
      <section className="bg-[#fbfbfb]">
        <div className="container">
          <SubFaqSection />
        </div>
      </section>
    </HomeLayout>
  );
};

export default Faq;