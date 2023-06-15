/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Benefit from './Benefit';

const WhyChooseFMS = ({ isLoggedIn }) => {
  const benefitsAsPartner = [
    {
      title: 'Get Paid',
      description:
        'Earn money each time your pond is fished! During the listing process, we suggest rental rates. As the pond owner, you set your own rental rates based on your knowledge of the pond and community. Pond owners earn 80% of each transaction and potential tax benefits.',
    },
    {
      title: 'You Are Always In Control',
      description:
        'You have full control over sharing your pond. When you list your pond or lake with FishMySpot,  you choose availability, rest days, fishing rules, and can enhance the experience with amenities (canoe, kayak, grill, bait, fishing poles, etc.). Your property, your rules.',
    },
    {
      title: 'Reduce Your Risk',
      description:
        'We prioritize safety for pond owners. We provide $1M general liability insurance coverage. Adding your property to the policy is immediate. Anglers agree to terms and conditions before stepping foot on your property. Additionally, non-compliance from our community of anglers leads to ban from our website.',
    },
    {
      title: 'Save Time & Keep Your Privacy',
      description:
        'We protect your privacy. Anglers reserve your spot on our website, ensuring your address remains undisclosed until the reservation is confirmed from you. We cover the booking process and marketing so you can save time for more of the things you love.',
    },
  ];
  return (
    <div className="bg-primary/10">
      <div className="container my-10 py-16 md:my-14 lg:my-20">
        <h3 className="mb-5 text-center font-food-truck text-3xl text-primary md:mb-16 md:text-5xl">
          PARTNER WITH FishMySpot
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
            href={!isLoggedIn ? '#get-started' : '/list-your-spot'}
            className="rounded-full bg-primary px-8 py-3 font-trade-gothic text-lg text-white"
          >
            {!isLoggedIn ? 'Get Started' : 'Start Listing'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFMS;
