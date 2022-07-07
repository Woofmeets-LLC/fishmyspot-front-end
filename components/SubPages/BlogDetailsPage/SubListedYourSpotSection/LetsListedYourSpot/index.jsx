import Link from 'next/link';

const LetsListedYourSpot = () => {
  return (
    <div className="listing-spot w flex items-center justify-center bg-secondary py-10 lg:py-0">
      <div className="container flex w-[380px] flex-col items-center justify-center text-white lg:w-[300px] xl:w-[380px] 2xl:w-[482px]">
        <h2 className="mb-8 font-food-truck text-3xl uppercase xl:text-4xl 2xl:text-5xl">
          LIST YOUR PRIVATE POND OR LAKE AND GET HOOKED!
        </h2>
        <p className="font-trade-gothic">
          Sharing your pond is easy and free. You get paid every time your pond
          is booked. Plus, you stay in control of your pond and your
          availability.
          <Link href={'/benefits-guide'}>
            <a className="underline">
              Click here to learn more about the benefits of sharing.
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LetsListedYourSpot;
