// import Slider from "react-slick";
import axios from 'axios';
import Slider from 'react-slick';
import useSWR from 'swr';
import FeaturedSpot from '../FeauturedSpot';

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
    })
    .then((res) => res.data.data);

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
  const { data: featuredSpots, error } = useSWR(
    'https://cms.fishmyspot.com/api/featured-spots?populate=*',
    fetcher
  );

  if (error) console.log({ error });

  if (!featuredSpots) return <></>;

  return (
    featuredSpots && (
      <section className="container">
        <div className="featured-spot-slider py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20 2xl:py-32">
          <div className=" text-primary text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-food-truck uppercase">
              Some of our featured spots
            </h1>
            <span className="w-[140px] h-[6px] bg-secondary inline-block rounded-full mt-4"></span>
          </div>
          <Slider {...settings}>
            {featuredSpots?.map(({ id, ...featuredData }) => (
              <FeaturedSpot
                key={id}
                title={featuredData?.attributes?.title}
                img={featuredData?.attributes?.image?.data[0]?.attributes?.url}
                description={featuredData?.attributes?.description}
                spotLink={featuredData?.attributes?.spotLink}
              />
            ))}
          </Slider>
        </div>
      </section>
    )
  );
};

export default SubFeaturedSpotSection;
