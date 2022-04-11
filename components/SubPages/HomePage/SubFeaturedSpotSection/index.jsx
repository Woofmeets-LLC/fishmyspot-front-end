// import Slider from "react-slick";
import Slider from 'react-slick';
import FeaturedSpot from '../FeauturedSpot';

const SubFeaturedSpotSection = () => {
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
          slidesToShow: 1,
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
    <section className="container">
      <div className="featured-spot-slider py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20 2xl:py-32">
        <div className=" text-primary text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-food-truck uppercase">
            Some of our featured spots
          </h1>
          <span className="w-[140px] h-[6px] bg-secondary inline-block rounded-full mt-4"></span>
        </div>
        <Slider {...settings}>
          <FeaturedSpot
            img={'/images/Green-Pond-Compressed.PNG'}
            title={'Trophy Fishing in Green, OH'}
            description={
              'Gorgeous 2 acre pond with trophy fish and many amenities included such as, metal boat, pond prowler, kayak, dock, and picnic tables. Book now.'
            }
          />
          <FeaturedSpot
            img={'/images/East-Canton.jpeg'}
            title={'Varian Orchard E. Canton, OH'}
            description={
              ' This gorgeous lake comes in at 5.2 acres with plenty of shoreline to fish from and a dock. You will enjoy the backdrop of lush trees.  Book now.'
            }
          />
          <FeaturedSpot
            img={'/images/North-Royalton-Pond-W-Logo.png'}
            title={'Farm Pond in N. Royalton, OH'}
            description={
              'This beautiful farm pond is located in North Royalton! Pond is part of an organic produce farm and it is chemical free. Deepest depth of pond is 15 feet. Book now.'
            }
          />
          <FeaturedSpot
            img={'/images/East-Canton.jpeg'}
            title={'Varian Orchard E. Canton, OH'}
            description={
              'This gorgeous lake comes in at 5.2 acres with plenty of shoreline to fish from and a dock. You will enjoy the backdrop of lush trees. Book now'
            }
          />
        </Slider>
      </div>
    </section>
  );
};

export default SubFeaturedSpotSection;
