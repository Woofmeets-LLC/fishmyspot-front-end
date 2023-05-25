import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import OwnerFAQ from '../../FaqPage/SubFaqSection/OwnerFAQ';

const PondOwnersFAQ = () => {
  return (
    <div className="container">
      <div className="mx-auto pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-7 md:pb-12 xl:w-[1024px] xl:pb-20 xl:pt-8 2xl:pt-10 2xl:pb-24 3xl:w-[1180px]">
        <OwnerFAQ
          sectionTitle="Questions? We’ve got answers."
          titleClass="text-center md:!mb-8 !mb-7 lg:!mb-14"
        />
      </div>
    </div>
  );
};

export default PondOwnersFAQ;
