/* eslint-disable react/display-name */
import React, { useState } from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import ViewImageModal from '../../components/SubPages/ServiceListPage/ViewImageModal';
import SubServicesListHeroSection from '../../components/SubPages/ServiceListPage/SubServicesListHeroSection';
import SubServicesDetailsSection from '../../components/SubPages/ServiceListPage/SubServicesDetailsSection';
import SubReservationSection from '../../components/SubPages/ServiceListPage/SubReservationSection';
import SubMapSection from '../../components/SubPages/ServiceListPage/SubMapSection';

const ServicesList = () => {

  const [imageModal, setImageModal] = useState(false);

  return (
    <HomeLayout>
      <ViewImageModal
        imageModal={imageModal}
        setImageModal={setImageModal}
      />

      <div className="bg-[#fbfbfb]">
        <div className="container mt-6 md:mt-9 xl:mt-11">
          {/* hero section */}
          <SubServicesListHeroSection
            setImageModal={setImageModal}
          />

          {/* content section */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-16 xl:gap-28 2xl:gap-[100px] 3xl:gap-[136px] mb-7 md:mb-10 lg:mb-16 xl:mb-20">
            <SubServicesDetailsSection />
            <SubReservationSection />
          </div>

          {/* map */}
          <SubMapSection />

        </div>
      </div>
    </HomeLayout>
  );
};

export default ServicesList;