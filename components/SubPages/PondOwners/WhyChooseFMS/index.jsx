/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Benefit from './Benefit';

const WhyChooseFMS = () => {
  const benefitsAsPartner = [
    {
      title: 'Save Time for What You Love',
      description:
        'Marketing and organizing visitors yourself is time consuming and frustrating. LandTrust makes it easy by doing the work for you.',
    },
    {
      title: 'Reduce Your Risk',
      description:
        'LandTrust’s Safety and Insurance Program includes guest ID verification, requires credit card prepayment and liability waivers from your guests, covers participant insurance, and includes our $1M general liability policy. Additionally, many states are working to encourage and grow agritourism and have passed measures to protect landowners from the related liability. For those states that do not, LandTrust has partnered with both the Farm Bureau and National Deer Association to provide our landowners any additional liability coverage they may need.',
    },
    {
      title: 'You Are Always in Control',
      description:
        'When you take advantage of LandTrust’s platform, you set the price, remain in control of the dates for access, establish what activities are allowed, approve who can come, and set any rules for your land’s use. LandTrust takes care of finding the right people willing to pay you the right price.',
    },
    {
      title: 'No Upfront Costs, 85% is Yours',
      description:
        'There is no cost for signing up or listing your property. There is no commitment until you host visitors and begin earning 85% of the booking price. We only get paid when you do.',
    },
  ];
  return (
    <div className="bg-primary/10">
      <div className="container my-10 py-16 md:my-14 lg:my-20">
        <h3 className="mb-5 text-center font-food-truck text-3xl text-primary md:mb-16 md:text-5xl">
          Partner with Fish My Spot
        </h3>
        <div className="mx-auto grid gap-7 lg:w-2/3 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-7 lg:gap-16">
            {benefitsAsPartner?.slice(0, 2)?.map((benefit, index) => (
              <Benefit key={`benefit-${index + 1}`} {...benefit} />
            ))}
          </div>
          <div className="flex flex-col gap-7 lg:gap-16">
            {benefitsAsPartner?.slice(2, 4)?.map((benefit, index) => (
              <Benefit key={`benefit-${index + 3}`} {...benefit} />
            ))}
          </div>
        </div>
        <div className="mt-10 text-center md:mt-16">
          <a
            href="#get-started"
            className="rounded-full bg-primary px-8 py-3 font-trade-gothic text-lg text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFMS;
