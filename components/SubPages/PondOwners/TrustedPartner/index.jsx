/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

const TrustedPartner = () => {
  return (
    <div className="container my-10 flex flex-col gap-0 lg:my-20 lg:grid lg:grid-cols-2 lg:gap-14">
      <div className=" order-2 lg:order-1 ">
        <div className="py-5 md:py-10 xl:py-16">
          <h3 className="mb-3 font-trade-gothic text-lg text-primary md:text-2xl">
            Your Advocate For
          </h3>
          <h1 className=" font-food-truck text-3xl text-primary md:text-5xl">
            Private Water Fishing
          </h1>
          <span className="mt-2 block h-[6px]  w-24 rounded-full bg-secondary md:mt-4 md:w-[140px]"></span>
          <p className="mt-3 font-trade-gothic text-primary  md:mt-6 md:text-lg">
            As a pond owner, you possess a valuable asset that has the potential
            to create unforgettable angling experiences for enthusiasts while
            also generating additional income for you.
          </p>
          <p className="mt-3 font-trade-gothic text-primary  md:mt-6 md:text-lg">
            At Fishmyspot, we recognize the significance of trust and
            dependability when it comes to renting out your pond or lake for
            recreational fishing. That's why we are committed to serving as your
            reliable ally every step of the way.
          </p>
        </div>
      </div>
      <div className="relative order-1 aspect-video overflow-hidden lg:order-2 lg:aspect-auto">
        <Image
          layout="fill"
          className="object-cover"
          src={'/images/family-fishing.jpeg'}
          alt="Your Trusted Partner"
        />
      </div>
    </div>
  );
};

export default TrustedPartner;
