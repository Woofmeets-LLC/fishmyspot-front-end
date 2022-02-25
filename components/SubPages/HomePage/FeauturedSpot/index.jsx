import React from 'react';

const FeaturedSpot = () => {
  return (
    <div className='mx-3 xl:mx-5 shadow-xl rounded-xl overflow-hidden'>
      <div className='w-full h-[180px] lg:h-[160px] 2xl:h-[200px] 3xl:h-[227px] rounded-xl overflow-hidden'>
        <img src="/images/pond1.jpg" alt="Pond" className='w-full h-full 2xl:h-full' />
      </div>
      <div className='p-3 2xl:py-6 2xl:pl-4 2xl:pr-6'>
        <h4 className='text-base md:text-lg xl:text-xl text-primary font-trade-gothic-bold capitalize mb-3 2xl:mb-4'>oh-medina county- seville</h4>
        <p className='text-sm font-trade-gothic text-highlight-1 mb-3 2xl:mb-5'>This lovely, quaint pond comes in at .5 acre. Though this pond may be on the smaller size, the fish in the pond are HUGE.</p>

        <span className='text-sm font-trade-gothic-bold text-highlight-3'>Read more</span>
      </div>
    </div>
  );
};

export default FeaturedSpot;