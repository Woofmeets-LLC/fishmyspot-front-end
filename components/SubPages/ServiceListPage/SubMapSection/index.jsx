import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

const SubMapSection = () => {
  return (
    <div className='mb-2'>
      <div className='flex items-center mb-3 lg:mb-4 xl:mb-5'>
        <span className='text-secondary text-base xl:text-lg'>
          <FaMapMarkerAlt />
        </span>
        <h3 className='ml-2 text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-food-truck text-primary'>LOCATION</h3>
      </div>
      <div className='w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[420px] xl:h-[480px] 2xl:h-[535px]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279900899!2d-74.25987117297201!3d40.697670065995105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1646824140186!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
      </div>
    </div>
  );
};

export default SubMapSection;