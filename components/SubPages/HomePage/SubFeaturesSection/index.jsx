import { GiCirclingFish } from "react-icons/gi";

const SubFeaturesSection = () => {
  return (
    <section className='container'>
      <div className="py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20 2xl:py-32">
        <div className='text-center'>
          <h1 className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] xl:max-w-[380px] 2xl:max-w-[510px] mx-auto text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-primary font-food-truck">Fish Your Own Private Pond Or Lake And Get Hooked!</h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10 pt-10 md:pt-16 xl:pt-20">
          <div className='text-center'>
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 mx-auto flex justify-center items-center text-secondary rounded-full bg-[#7baed424]">
              <span className="text-2xl lg:text-3xl 2xl:text-4xl">
                <GiCirclingFish />
              </span>
            </div>
            <div className='pt-6'>
              <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-food-truck uppercase pb-5 xl:pb-7 2xl:pb-12 text-primary">QUALITY FISHING</h3>
              <p className="text-justify lg:text-center text-sm md:text-base 2xl:text-xl font-trade-gothic font-light text-highlight-1">You will have exclusive access to the fishing spot you reserved. Stop fighting the crowds or driving far  from home and start catching large fish (and lots of them).</p>
            </div>
          </div>
          <div className='text-center'>
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 mx-auto flex justify-center items-center text-secondary rounded-full bg-[#7baed424]">
              <span className="text-2xl lg:text-3xl 2xl:text-4xl">
                <img
                  src="/images/001-camera.png"
                  className="w-[30px] h-[30px]"
                  alt="New Memories" />
              </span>
            </div>
            <div className='pt-6'>
              <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-food-truck uppercase pb-5 xl:pb-7 2xl:pb-12 text-primary">NEW MEMORIES</h3>
              <p className="text-justify lg:text-center text-sm md:text-base 2xl:text-xl font-trade-gothic font-light text-highlight-1">Private fishing spots are maintained, fish are plentiful to catch, and the location is convenient. This makes for a perfect occasion to create new memories.</p>
            </div>
          </div>
          <div className='text-center'>
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 mx-auto flex justify-center items-center text-secondary rounded-full bg-[#7baed424]">
              <span className="text-2xl lg:text-3xl 2xl:text-4xl">
                <img
                  src="/images/002-boat.png"
                  className="w-[30px] h-[30px]"
                  alt="Personalized experience" />
              </span>
            </div>
            <div className='pt-6'>
              <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-food-truck uppercase pb-5 xl:pb-7 2xl:pb-12 text-primary">PERSONALIZED EXPERIENCE</h3>
              <p className="text-justify lg:text-center text-sm md:text-base 2xl:text-xl font-trade-gothic font-light text-highlight-1">When you book a fishing spot, we make it easy to find what you need. We have you covered, whether you are looking for a particular type of fish, renting a boat, or looking to camp overnight. Our fishing spots have an array of private amenities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFeaturesSection;