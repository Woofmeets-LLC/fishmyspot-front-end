/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

const TrustedPartner = () => {
  return (
    <div className="container my-10 flex flex-col gap-0 lg:my-20 lg:grid lg:grid-cols-2 lg:gap-14">
      <div className=" order-2 lg:order-1 ">
        <div className="py-5 md:py-10 xl:py-16">
          <h3 className="mb-3 font-trade-gothic text-lg text-primary md:text-2xl">
            Your Trusted Partner for
          </h3>
          <h1 className=" font-food-truck text-3xl text-primary md:text-5xl">
            Increase your income
          </h1>
          <span className="mt-2 block h-[6px]  w-24 rounded-full bg-secondary md:mt-4 md:w-[140px]"></span>
          <p className="mt-3 font-trade-gothic text-primary  md:mt-6 md:text-lg">
            You have a valuable asset that can provide memorable experiences for
            anglers while generating extra income for you.
          </p>
          <p className="mt-3 font-trade-gothic text-primary  md:mt-6 md:text-lg">
            At Fishmyspot, we understand the importance of trust and reliability
            when it comes to listing your pond for recreational fishing. That's
            why we're here to be your trusted partner throughout the process.
          </p>
        </div>
      </div>
      <div className="relative order-1 aspect-video overflow-hidden lg:order-2 lg:aspect-auto">
        <Image
          layout="fill"
          className="object-cover"
          src={'/images/resource.jpg'}
          alt="Your Trusted Partner"
        />
      </div>
    </div>
  );
};

export default TrustedPartner;
