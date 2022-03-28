import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Features from '../Features';

const SubServicesDetailsSection = ({ pondData }) => {

  const ratings = pondData?.attributes?.publicData?.absoluteRating || pondData?.attributes?.publicData?.rating
  const reviewCount = pondData?.attributes?.publicData?.reviewCount || 0;
  const formattingString = (string) => {
    const formattedString = string?.replace(/-n-/g, ' & ').toLowerCase();
    return formattedString;
  }

  const amenitiesArray = (pondData) => {
    const hasOtherAmenities = pondData?.attributes?.publicData?.amenities?.includes("Other");
    const amenitiesArr = pondData?.attributes?.publicData?.amenities?.filter(amenity => amenity !== "Other");
    const otherAmenitiesArr = pondData?.attributes?.publicData?.allAmenities?.others;

    if (hasOtherAmenities) {
      return [...amenitiesArr, ...otherAmenitiesArr]
    } else {
      return amenitiesArr
    }
  }

  const fishesArray = (pondData) => {
    const hasOtherFishes = pondData?.attributes?.publicData?.fishes?.includes("Other");
    const fishesArr = pondData?.attributes?.publicData?.fishes?.filter(fish => fish !== "Other");
    const otherFishesArr = pondData?.attributes?.publicData?.allFishes?.othersFish;

    if (hasOtherFishes) {
      return [...fishesArr, ...otherFishesArr]
    } else {
      return fishesArr
    }
  }
  return (
    <div className="order-2 lg:order-1 mt-8 lg:mt-0 lg:w-[600px] 3xl:w-[700px]">
      <div>
        <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] 3xl:text-5xl text-primary font-food-truck uppercase mb-4 2xl:mb-6'>
          {pondData?.attributes?.title}
        </h1>
        <div className='flex items-center space-x-3 xl:text-lg text-highlight-1 mb-4 2xl:mb-6'>
          <div className='flex text-highlight-3 space-x-2'>
            {
              [1, 2, 3, 4, 5].map((i) => (
                i <= Math.floor(+ratings || 5)
                  ? <AiFillStar key={i} className="text-2xl" />
                  : <AiOutlineStar key={i} className="text-2xl" />
              ))
            }
          </div>
          <div>
            ({reviewCount})
          </div>
        </div>
        <div className='mb-4'>
          <p className='text-base font-trade-gothic-bold text-primary'>4 guests | pet friendly</p>
        </div>
        <div className='mb-6 md:mb-8 2xl:mb-11'>
          <h3 className='text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-food-truck uppercase text-primary mb-3'>Description</h3>
          <p className='text-sm md:text-base font-trade-gothic text-highlight-1'>
            {pondData?.attributes?.description}
          </p>
        </div>
        <div>
          <div className='grid sm:grid-cols-2 mb-4 md:mb-6 xl:mb-8 2xl:mb-11'>
            <div className='flex'>
              <div className='w-8 mt-4 2xl:mt-5'>
                <img
                  src="/images/Pond-Acre-Icon.svg"
                  alt="Pond Acre Icon"
                  className="w-7 -mt-1 h-2"
                />
              </div>
              <div className="ml-1 sm:ml-0">
                <Features
                  title={"POND ACREAGE"}
                  items={[
                    `${pondData?.attributes?.publicData?.acre} acr`,
                  ]}
                />
              </div>
            </div>
            <div className="flex">
              <div className='w-8'>
                <img
                  src="/images/Catch-Requirements-Icon.svg"
                  alt="Catch Requirements Icon"
                  className="w-4 h-5 mt-2 mx-auto"
                />
              </div>
              <div className="ml-1">
                <Features
                  title={"CATCH REQUIREMENTS"}
                  items={[
                    `${formattingString(pondData?.attributes?.publicData?.["catch-requirements"])}`,
                  ]}
                />
              </div>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 mb-4 md:mb-6 xl:mb-8 2xl:mb-11'>
            <div className="flex space-x-1">
              <div className='w-8 mt-3'>
                <img
                  src='/images/Amenities-Icon.svg'
                  alt='Amenities Icon'
                  className='w-5 -mt-2 mx-auto'
                />
              </div>
              <div>
                <Features
                  title={"AMENITIES"}
                  items={amenitiesArray(pondData)}
                />
              </div>
            </div>
            <div className="flex space-x-1">
              <div className='w-8 mt-4'>
                <img
                  src="/images/Type-of-Fish-Icon.svg"
                  alt="Fish Icon"
                  className='w-6 -mt-[6px] mx-auto'
                />
              </div>
              <div>
                <Features
                  title={"Fish"}
                  items={fishesArray(pondData)}
                />
              </div>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 mb-4 md:mb-6 xl:mb-8 2xl:mb-11'>
            <div className="flex space-x-1">
              <div className="w-8 mt-4">
                <img
                  src="/images/Experiences-Icon.svg"
                  alt="Experiences Icon"
                  className='w-5 -mt-2 mx-auto'
                />
              </div>
              <div>
                <Features
                  title={"Experiences"}
                  items={pondData?.attributes?.publicData?.experiences}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServicesDetailsSection;