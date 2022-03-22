import React from 'react';
import { PropertyCard } from '../../Common';

const SubFavoritePondList = () => {
  return (
    <div className="py-8 sm:py-10 md:pt-12 md:pb-24">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7 xl:gap-x-8 xl:gap-y-11">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default SubFavoritePondList;
