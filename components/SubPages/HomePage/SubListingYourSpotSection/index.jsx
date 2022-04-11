import Link from 'next/link';
import React from 'react';

const SubListingYourSpotSection = () => {
  return (
    <section className='container'>
      <div className="py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20 2xl:py-32">
        <div className='grid md:grid-cols-2'>
          <div className='mx-auto my-auto'>
            <img
              src="/images/fatherSonFishing.jpg"
              alt="Father Son Fishing"
              className='w-[240px] h-[240px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[484px] 2xl:h-[484px] object-cover rounded-full'
            />
          </div>
          <div className='xl:mt-8'>
            <h1 className="relative uppercase text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-food-truck text-primary max-w-[300px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[400px] 2xl:max-w-[522px] mt-4 md:mt-0">Find out how much you can make listing your spot</h1>
            <span className='w-[140px] h-[6px] bg-secondary block rounded-full mt-4'></span>
            <p className="mt-8 mb-4 lg:max-w-[400px] 2xl:max-w-[470px] text-sm sm:text-base 2xl:text-xl text-highlight-1 font-trade-gothic leading-5">We provide private ponds/lakes for parents, grandparents, the frequent fisherman, and most importantly, to get kids outside and enjoy nature. Public lakes are over-fished, crowded and hard to access. By sharing your spot, you provide local access to your community to fish. Join our community of pond owner!</p>
            <Link href="/list-your-spot">
              <a className="inline-block bg-secondary text-white text-xs sm:text-sm lg:text-base xl:text-xl py-2 px-3 sm:py-2 sm:px-4 lg:py-3 lg:px-6 rounded font-trade-gothic-bold">Get Started</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubListingYourSpotSection;