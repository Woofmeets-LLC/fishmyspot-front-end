import React from 'react';
import FeaturedSpot from '../FeauturedSpot';

const SubFeaturedSpotSection = () => {
  return (
    <section className='container'>
      <div className='grid grid-cols-3 gap-4'>
        <FeaturedSpot />
        <FeaturedSpot />
        <FeaturedSpot />
      </div>
    </section>
  );
};

export default SubFeaturedSpotSection;