import React from "react";

const LetsListedYourSpot = () => {
  return (
    <div className="listing-spot w flex items-center justify-center bg-secondary py-10 lg:py-0">
      <div className="container flex w-[380px] flex-col items-center justify-center text-white lg:w-[300px] xl:w-[380px] 2xl:w-[482px]">
        <h2 className="mb-8 font-food-truck text-3xl uppercase xl:text-4xl 2xl:text-5xl">{`Ready? Let's Listed your Spots And Earn.`}</h2>
        <p className="font-trade-gothic">
          Aliquam vulputate, tortor nec commodo ultricies, vitae viverra urna
          nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem
          tincidunt id.
        </p>
      </div>
    </div>
  );
};

export default LetsListedYourSpot;
