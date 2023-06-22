import React from 'react';

const TopImageCard = () => {
  return (
    <div className="relative h-[300px] w-full 2xl:h-[350px] 3xl:h-[418px]">
      <img
        className="absolute z-[0] h-full w-full object-cover"
        src="/images/Family-Fishing.png"
        alt=""
      />
      <div className=" absolute z-[1] h-full w-full bg-black opacity-20"></div>
      <div className="absolute z-[2] flex h-full w-full items-center justify-center">
        <div className="mx-auto min-w-[300px] max-w-[425px] text-center text-white">
          <h2 className="mb-5 font-food-truck text-4xl 3xl:text-5xl">
            List Your Pond
          </h2>
          <p className="text-center font-trade-gothic text-[15px]">
            This lovely, quaint pond comes in at .5 acre. Though this pond may
            be on the smaller size, the fish in the pond are HUGE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopImageCard;
