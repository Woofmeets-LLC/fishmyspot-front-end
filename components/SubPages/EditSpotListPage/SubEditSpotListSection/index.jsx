import React from 'react';
import EditPropertyCard from '../EditPropertyCard';

const SubEditSpotListSection = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-5 2xl:gap-7 pt-8 pb-8 md:pt-12 md:pb-14'>
      <EditPropertyCard
        delay={(Math.floor(Math.random() * 10)) / 10}
        id={1}
        image={"/images/pond2.jpg"}
        title={"OH-STARK COUNTY-NAVARRE"}
        price={"$160.00"}
        ratings={3}
      />
      <EditPropertyCard
        delay={(Math.floor(Math.random() * 10)) / 10}
        id={1}
        image={"/images/pond2.jpg"}
        title={"OH-STARK COUNTY-NAVARRE"}
        price={"$160.00"}
        ratings={3}
      />
      <EditPropertyCard
        delay={(Math.floor(Math.random() * 10)) / 10}
        id={1}
        image={"/images/pond2.jpg"}
        title={"OH-STARK COUNTY-NAVARRE"}
        price={"$160.00"}
        ratings={3}
      />
      <EditPropertyCard
        delay={(Math.floor(Math.random() * 10)) / 10}
        id={1}
        image={"/images/pond2.jpg"}
        title={"OH-STARK COUNTY-NAVARRE"}
        price={"$160.00"}
        ratings={3}
      />
    </div>
  );
};

export default SubEditSpotListSection;