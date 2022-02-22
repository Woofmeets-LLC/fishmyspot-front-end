import React from 'react';

const FeaturedSpot = () => {
  return (
    <div className='w-[378px] h-[423px] shadow rounded-xl overflow-hidden'>
      <div className='w-full h-[227px] rounded-xl overflow-hidden'>
        <img src="/images/pond1.jpg" alt="Pond" className='w-full h-full' />
      </div>
      <div className='py-6 pl-4 pr-6'>
        <h4 className='text-xl text-primary font-trade-gothic-bold capitalize mb-4'>oh-medina county- seville</h4>
        <p className='text-sm font-trade-gothic text-highlight-1 mb-5'>This lovely, quaint pond comes in at .5 acre. Though this pond may be on the smaller size, the fish in the pond are HUGE.</p>

        <span className='text-sm font-trade-gothic-bold text-highlight-3'>Read more</span>
      </div>
    </div>
  );
};

export default FeaturedSpot;