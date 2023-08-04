/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubAmenitiesEdit from '../../../components/SubPages/EditPondPage/SubAmenitiesEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { getSdk } from '../../../sharetribe/sharetribeSDK';
import { UUID } from '../../../types';

const AmenitiesEdit = () => {
  const [pondData, setPondData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { query, push } = useRouter();
  const getPondData = () => {
    setLoading(true);
    getSdk()
      .ownListings.show({ id: query['pond-id'] })
      .then((res) => {
        setLoading(false);
        // res.data contains the response data
        setPondData(res?.data?.data?.attributes);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getPondData();
  }, [query]);

  // AddOns Data making
  const tempAddOns = pondData?.publicData?.addOns;
  const initialAddOns = {
    'pond-trawler-or-metal-boat': {
      checked: false,
      title: 'Pond Trawler/Metal Boat',
      price: 20,
    },
    campsite: {
      checked: false,
      title: 'Campsite',
      price: 20,
    },
    'additional-fisherman': {
      checked: false,
      title: 'Additional Fisherman',
      price: 10,
    },
  };
  const addOns = Object.keys(initialAddOns)?.reduce((prevObj, key) => {
    const checked = tempAddOns
      ?.map((addOn) => addOn.title)
      ?.includes(initialAddOns[key].title);
    return {
      ...prevObj,
      [key]: { ...initialAddOns[key], checked },
    };
  }, {});

  const handleUpdatePondData = (values, helpers) => {
    // Amenities Data
    const tempAmenities = Object.keys(values?.amenities)?.filter(
      (amenity) => values?.amenities[amenity]
    );
    const amenities = values?.otherAmenities?.isSelected
      ? [...tempAmenities, 'Other']
      : tempAmenities;
    const allAmenities = {
      amenities: values?.amenities,
      others: values?.otherAmenities?.isSelected
        ? values?.otherAmenities?.names
            ?.split(',')
            ?.filter((amenity) => amenity !== '')
        : [],
    };

    // Add ONs data
    const experiences = Object.keys(values?.addOns)
      ?.filter((key) => values?.addOns[key].checked)
      ?.map((key) => values?.addOns[key]?.title?.split('(')[0].trim());
    const addOnsData = Object.keys(values?.addOns)
      ?.filter((key) => values?.addOns[key].checked)
      ?.map((key) => ({
        title: values?.addOns[key]?.title?.split('(')[0].trim(),
        price: values?.addOns[key]?.price,
      }));

    setIsSubmitting(true);

    const updatingPondData = getSdk().ownListings.update({
      id: new UUID(query['pond-id']),
      publicData: {
        additionalGuestFee: values?.additionalGuestFee
          ? +values?.additionalGuestFee || 0
          : 0,
        amenities,
        allAmenities,
        experiences,
        addOns: addOnsData,
      },
    });
    toast.promise(updatingPondData, {
      duration: 3000,
      loading: 'Pond listing data updating...',
      success: (res) => {
        setTimeout(() => push('/own-spot-list'), 2000);
        setIsSubmitting(false);
        return `Your pond updated successfully!`;
      },
      error: (err) => {
        setIsSubmitting(false);
        return `Pond updating failed. Please try again!`;
      },
    });
  };

  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: 'owner',
        fallbackUrl: '/',
      }}
    >
      <EditPondContainer>
        <Formik
          enableReinitialize
          initialValues={{
            additionalGuestFee: pondData?.publicData?.additionalGuestFee || '',
            amenities: {
              'Canoe/kayak': false,
              'Pavilion or Other Shelter': false,
              Grill: false,
              Restrooms: false,
              'Pet Friendly': false,
              'Picnic Tables': false,
              Dock: false,
              ...pondData?.publicData?.allAmenities?.amenities,
            },
            otherAmenities: {
              isSelected: pondData?.publicData?.allAmenities?.others?.length
                ? true
                : false,
              names:
                pondData?.publicData?.allAmenities?.others?.join(',') || '',
            },
            addOns,
            otherAddOns: {
              isSelected: false,
              services: [],
            },
          }}
          onSubmit={handleUpdatePondData}
        >
          <Form>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                <SubAmenitiesEdit />
                <div className="my-2 text-right">
                  <button
                    type={isSubmitting ? 'button' : 'submit'}
                    className="ml-auto flex items-center justify-center rounded bg-secondary py-2 px-8 font-trade-gothic-bold text-white"
                  >
                    {isSubmitting && (
                      <span className="flex w-7 animate-spin items-center justify-center">
                        <span className="h-5 w-5 rounded-full border-t-2 border-b-2 border-white"></span>
                      </span>
                    )}
                    {isSubmitting ? 'Loading...' : `Update`}
                  </button>
                </div>
              </>
            )}
          </Form>
        </Formik>
      </EditPondContainer>
    </HomeLayout>
  );
};

export default AmenitiesEdit;
