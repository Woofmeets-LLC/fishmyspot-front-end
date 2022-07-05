/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import SubReservationSection from '../../components/SubPages/ServiceListPage/SubReservationSection';
import SubServicesDetailsSection from '../../components/SubPages/ServiceListPage/SubServicesDetailsSection';
import SubServicesListHeroSection from '../../components/SubPages/ServiceListPage/SubServicesListHeroSection';
import ViewImageModal from '../../components/SubPages/ServiceListPage/ViewImageModal';
import HomeLayout from '../../layouts/HomeLayout';
import { getSdk } from '../../sharetribe/sharetribeSDK';

const PondDetails = () => {
  const [imageModal, setImageModal] = useState(false);
  const [pondData, setPondData] = useState({});
  const [pondImages, setPondImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const { query } = useRouter();

  useEffect(() => {
    setLoading(true);
    getSdk()
      .listings.show(
        {
          id: query['pond-id'],
          include: ['images', 'author'],
        },
        {
          expand: true,
        }
      )
      .then((res) => {
        setLoading(false);

        const data = res?.data?.data;
        const included = res?.data?.included;
        const formattedData = {
          ...data,
          relationships: {
            ...data.relationships,
            images: {
              data: data?.relationships?.images?.data?.map((image) => {
                return included?.find(
                  (included) => included.id.uuid === image.id.uuid
                );
              }),
            },
          },
        };
        setPondImages(
          formattedData?.relationships?.images?.data?.map(
            (image) => image?.attributes?.variants?.default?.url
          )
        );
        setPondData(formattedData);
        console.log({ formattedData });
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [query]);

  return (
    <HomeLayout
      ogTags={{
        title: pondData?.attributes?.title,
        description: pondData?.attributes?.description,
        image: pondImages?.[0],
      }}
    >
      {loading && (
        <div className="my-64 flex flex-wrap items-center justify-center">
          <ClipLoader size={50} color={'#1971ff'} />
          <h2 className="mt-2 w-full text-center font-semibold">Loading...</h2>
        </div>
      )}

      {!loading && pondData?.id?.uuid && (
        <>
          <ViewImageModal
            pondImages={pondImages}
            imageModal={imageModal}
            setImageModal={setImageModal}
          />

          <div className="bg-[#fbfbfb]">
            <div className="container mt-6 md:mt-9 xl:mt-11">
              {/* hero section */}
              <SubServicesListHeroSection
                setImageModal={setImageModal}
                pondImages={pondImages}
              />

              {/* content section */}
              <div className="flex flex-col gap-16 pb-7 md:pb-10 lg:flex-row lg:justify-between lg:pb-16 xl:gap-28 xl:pb-20 2xl:gap-[100px] 3xl:gap-[136px]">
                <SubServicesDetailsSection pondData={pondData} />
                {isLoggedIn &&
                user?.profile?.publicData?.account_type == 'angler' ? (
                  <SubReservationSection pondData={pondData} />
                ) : (
                  <div className="order-1 w-full md:w-2/3 lg:order-2 lg:w-[420px] 2xl:w-[510px] ">
                    <div className="mx-auto rounded-lg bg-white shadow-lg">
                      <div className="px-4 py-6 sm:px-7 sm:pt-8 sm:pb-10">
                        <h2 className="text-center font-trade-gothic-bold">
                          {!isLoggedIn
                            ? 'Log in to book the spot.'
                            : 'As you are a pond owner, you can not book any pond.'}
                        </h2>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* map */}
              {/* <SubMapSection /> */}
            </div>
          </div>
        </>
      )}

      {!loading && !pondData?.id?.uuid && (
        <div className="my-64 flex flex-wrap items-center justify-center">
          <h1 className="w-full text-center text-4xl font-semibold">
            No pond found!
          </h1>
        </div>
      )}
    </HomeLayout>
  );
};

export default PondDetails;
