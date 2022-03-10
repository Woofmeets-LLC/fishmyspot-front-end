import React from 'react';

const SubServicesListHeroSection = ({ setImageModal }) => {
  return (
    <div className='w-full relative h-[200px] sm:h-[220px] md:h-[310px] lg:h-[400px] xl:h-[480px] 2xl:h-[590px] 3xl:h-[697px] mb-14 md:mb-20 xl:mb-24'>
      <img
        src="/images/pond1.jpg"
        alt="Pond"
        className='w-full h-full object-cover'
      />
      <div className="absolute right-3 md:right-4 xl:right-12 bottom-3 md:bottom-5 xl:bottom-12">
        <button
          onClick={() => setImageModal(prevState => !prevState)}
          className='p-2 sm:py-2 sm:px-3 xl:py-3 xl:px-4 bg-secondary text-xs md:text-sm font-trade-gothic-bold text-primary rounded'>View photos (3)</button>
      </div>
      <div className='w-20 sm:w-24 md:w-28 xl:w-32 2xl:w-[158px] h-20 sm:h-24 md:h-28 xl:h-32 2xl:h-[158px] -mt-14 sm:-mt-16 md:-mt-20 2xl:-mt-24 ml-5 md:ml-9'>
        <img
          src="/images/client.jpg"
          alt="client"
          className='w-full h-full rounded-full object-cover'
        />
      </div>
    </div>
  );
};

export default SubServicesListHeroSection;