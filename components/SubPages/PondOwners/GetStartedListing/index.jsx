import Link from 'next/link';
import React from 'react';

const GetStartedListing = () => {
  return (
    <section className="container">
      <div className="py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20 2xl:py-32">
        <div className="grid md:grid-cols-2">
          <div className="mx-auto my-auto">
            <img
              src="/images/fatherSonFishing.jpg"
              alt="Father Son Fishing"
              className="h-[240px] w-[240px] rounded-full object-cover md:h-[300px] md:w-[300px] xl:h-[400px] xl:w-[400px] 2xl:h-[484px] 2xl:w-[484px]"
            />
          </div>
          <div className="xl:mt-8">
            <h1 className="relative mt-4 max-w-[300px] font-food-truck text-2xl uppercase text-primary sm:text-2xl md:mt-0 md:max-w-[250px] lg:max-w-[300px] lg:text-3xl xl:max-w-[400px] xl:text-4xl 2xl:max-w-[522px] 2xl:text-5xl">
              Find out how much you can make listing your spot
            </h1>
            <span className="mt-4 block h-[6px] w-[140px] rounded-full bg-secondary"></span>
            <p className="mt-8 mb-4 font-trade-gothic leading-5 text-highlight-1 sm:text-base lg:max-w-[400px] 2xl:max-w-[470px] 2xl:text-xl">
              We provide private ponds/lakes for parents, grandparents, the
              frequent fisherman, and most importantly, to get kids outside and
              enjoy nature. Public lakes are over-fished, crowded and hard to
              access. By sharing your spot, you provide local access to your
              community to fish. Join our community of pond owner!
            </p>
            <Link href="#get-started">
              <a className="inline-block rounded bg-secondary py-2 px-3    text-white sm:py-2 sm:px-4 lg:py-3 lg:px-6  xl:text-xl">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedListing;
