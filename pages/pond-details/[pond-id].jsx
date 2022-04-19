/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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

  const { isLoggedIn, user } = useSelector(state => state.auth);

  const { query } = useRouter()

  useEffect(() => {
    setLoading(true);
    getSdk().listings.show({
      id: query['pond-id'],
      include: ['images', 'author']
    }, {
      expand: true,
    })
      .then(res => {
        setLoading(false);

        const data = res?.data?.data;
        const included = res?.data?.included;
        const formattedData = {
          ...data,
          relationships: {
            ...data.relationships,
            images: {
              data: data?.relationships?.images?.data?.map(image => {
                return included?.find(included => included.id.uuid === image.id.uuid);
              })
            }
          }
        }
        setPondImages(formattedData?.relationships?.images?.data?.map(image => image?.attributes?.variants?.default?.url));
        setPondData(formattedData)
      })
      .catch(err => {
        setLoading(false);
      })
  }, [query])

  return (
    <HomeLayout>
      {
        loading
          ? <div className="flex justify-center items-center flex-wrap my-10">
            <ClipLoader size={50} color={'#1971ff'} />
            <h2 className="w-full text-center font-semibold mt-2">Loading...</h2>
          </div>
          : <>
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
                <div className="flex flex-col lg:flex-row lg:justify-between gap-16 xl:gap-28 2xl:gap-[100px] 3xl:gap-[136px] mb-7 md:mb-10 lg:mb-16 xl:mb-20">
                  <SubServicesDetailsSection pondData={pondData} />
                  {
                    (isLoggedIn &&
                      user?.profile?.publicData?.account_type == 'angler')
                      ? <SubReservationSection pondData={pondData} />
                      : <div className="order-1 lg:order-2 w-full md:w-2/3 lg:w-[420px] 2xl:w-[510px] ">
                        <div className="mx-auto shadow-lg rounded-lg bg-white">
                          <div className='px-4 py-6 sm:px-7 sm:pt-8 sm:pb-10'>
                            <h2 className="text-center font-trade-gothic-bold">
                              {
                                !isLoggedIn
                                  ? "Login in to book the spot."
                                  : "As you are a pond owner you can not book any pond."
                              }
                            </h2>
                          </div>
                        </div>
                      </div>
                  }
                </div>

                {/* map */}
                {/* <SubMapSection /> */}

              </div>
            </div>
          </>
      }
    </HomeLayout>
  );
};

export default PondDetails;