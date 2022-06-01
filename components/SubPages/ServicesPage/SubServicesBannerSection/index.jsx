import axios from 'axios';
import Image from 'next/image';
import useSWR from 'swr';
const fetcher = (url) => axios.get(url).then((res) => res.data);

const SubServicesBannerSection = ({ state }) => {
  const { data, error } = useSWR(
    `https://cms.fishmyspot.com/api/states?populate=*&filters[state][$eq]=${state}`,
    fetcher
  );

  if (!data || data?.data?.length === 0 || error) return <></>;

  return (
    <section className="state-banner-section">
      <div
        className="relative flex h-48 w-full flex-col justify-center text-gray-100 md:h-80 xl:h-96  2xl:h-[544px]"
        style={{
          background:
            // "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url('/images/alabama.jpg') center/cover no-repeat",
            'linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .20))',
          gap: '1.5em',
        }}
      >
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-40"></div>
        {data && !error && (
          <Image
            src={
              data?.data[0]?.attributes?.featuredImage?.data?.attributes?.url
            }
            layout="fill"
            priority
            className="object-fill"
            alt={data && data?.data?.[0]?.attributes?.statePageHeader}
          />
        )}
        <div className="container z-50">
          <div className="md:w-2/3">
            <h1
              className="z-50 mb-4 font-food-truck text-xl uppercase leading-loose md:text-3xl lg:text-4xl 2xl:text-5xl"
              style={{
                'text-shadow':
                  '0 15px 30px rgba(0, 0, 0, 0.11), 0 5px 15px rgba(0,0,0,0.08)',
              }}
            >
              {data && data?.data?.[0]?.attributes?.statePageHeader}
            </h1>
            <p
              className="z-50 font-trade-gothic text-sm text-white lg:text-lg"
              style={{
                'text-shadow':
                  '0 15px 30px rgba(0, 0, 0, 0.11), 0 5px 15px rgba(0,0,0,0.08)',
              }}
            >
              {data && data?.data?.[0]?.attributes?.statePageDescription}
            </p>
          </div>
        </div>
      </div>
      {/* {data?.data?.[0]?.attributes?.statePageDescription && (
        <div className=" container relative z-50 -mt-12 hidden rounded-md bg-highlight-3 py-4 md:-mt-16 md:block md:py-8 md:px-16 xl:px-36 2xl:-mt-24 2xl:py-12">
          <h2 className="text-center font-food-truck text-xl leading-normal text-white md:text-2xl lg:text-3xl 2xl:text-[42px]">
            {data?.data?.[0]?.attributes?.statePageDescription}
          </h2>
        </div>
      )} */}
    </section>
  );
};

export default SubServicesBannerSection;
