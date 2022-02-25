import React from 'react';
import SingleQuestion from '../SingleQuestion';

const SubContentArea = () => {
  return (
    <div className='text-primary font-trade-gothic'>
      <div className='mb-3'>
        <h3 className='text-2xl mb-10'>About FishMySpot</h3>
        <p className='text-lg'>Getting started</p>
      </div>
      <SingleQuestion
        question={"How do I create an account?"}
      />
      <SingleQuestion
        question={"Who can host on FishMySpot?"}
      />
      <SingleQuestion
        question={"How do I create an account?"}
      />
      <SingleQuestion
        question={"How do I create an account?"}
      />
      <SingleQuestion
        question={"How do I create an account?"}
      />
    </div>
  );
};

export default SubContentArea;