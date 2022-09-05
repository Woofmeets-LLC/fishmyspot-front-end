import { useState } from 'react';
import Slider from 'react-slick';
import FishingSpotCard from './FishingSpotCard';

const SubFeaturedFishingSpotSection = ({ featuredSpots }) => {
  const [show, setShow] = useState(featuredSpots?.length || 0);
  const settings = {
    className: 'center',
    centerMode: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: '60px',
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50">
      <div className="container">
        <div className="feature-fishing-spot py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20 2xl:py-32">
          <div className=" mb-10 text-center text-primary">
            <h1 className="font-food-truck text-xl uppercase sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
              SOME OF OUR FEATURED FISHING SPOTS
            </h1>
            <span className="mt-4 inline-block h-[6px] w-[140px] rounded-full bg-secondary"></span>
          </div>

          {featuredSpots?.length > 2 ? (
            <Slider {...settings}>
              {featuredSpots.map((featuredSpot) => (
                <FishingSpotCard
                  key={featuredSpot?.id}
                  title={featuredSpot?.title}
                  img={featuredSpot?.image?.data?.attributes?.url}
                  description={featuredSpot?.description}
                  spotLink={featuredSpot?.spotLink}
                />
              ))}
            </Slider>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {featuredSpots.map((featuredSpot) => (
                <FishingSpotCard
                  key={featuredSpot?.id}
                  title={featuredSpot?.title}
                  img={featuredSpot?.image?.data?.attributes?.url}
                  description={featuredSpot?.description}
                  spotLink={featuredSpot?.spotLink}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubFeaturedFishingSpotSection;
