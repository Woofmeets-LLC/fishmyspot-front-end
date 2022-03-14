/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import SubMapSection from '../../components/SubPages/ServiceListPage/SubMapSection';
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

  const { query } = useRouter()

  useEffect(() => {
    setLoading(true);
    getSdk().listings.show({
      id: query['pond-id'],
      include: ['images']
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
        console.log(res);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      })
  }, [query])

  console.log(pondData);

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
                  <SubReservationSection pondData={pondData} />
                </div>

                {/* map */}
                <SubMapSection />

              </div>
            </div>
          </>
      }
    </HomeLayout>
  );
};

export default PondDetails;