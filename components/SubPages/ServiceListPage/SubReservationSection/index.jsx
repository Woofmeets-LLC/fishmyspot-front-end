/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import { setBookingData } from '../../../../store/slices/bookingDataSlice';
import AdditionalAngler from './AdditionalAngler';
import Calculation from './Calculation';
import DaysTypeSelect from './DaysTypeSelect';
import ExperienceSelect from './ExperienceSelect';
import SelectDateTime from './SelectDateTime';

const SubReservationSection = ({ pondData }) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { user } = useSelector((state) => state?.auth);

  const isProfileUpdated =
    user?.profile?.publicData?.address && user?.profile?.publicData?.phone
      ? true
      : false;

  useEffect(() => {
    if (!user?.profile?.publicData?.email) {
      getSdk()
        .currentUser.updateProfile(
          {
            publicData: {
              email: user?.email,
            },
          },
          {
            expand: true,
          }
        )
        .then(() => {
          dispatch(updateUser());
        })
        .catch(() => { });
    }
  }, []);

  const experience = pondData?.attributes?.publicData?.addOns?.reduce(
    (prevObj, currAddOn) => {
      return {
        ...prevObj,
        [currAddOn.title]: {
          checked: false,
          price: currAddOn.price,
        },
      };
    },
    {}
  );

  const recentVerificationEmail = () => {
    getSdk()
      .currentUser.sendVerificationEmail()
      .then((res) => {
        // res.data
        toast.success('Verification email sent.', { duration: 3000 });
      });
  };

  return (
    <div className="order-1 mx-auto w-full md:w-2/3 lg:order-2 lg:w-[420px] 2xl:w-[510px]">
      <div className="rounded-lg bg-white shadow-lg">
        <div className="px-4 py-6 sm:px-7 sm:pt-8 sm:pb-10">
          <h2 className="mb-4 font-food-truck text-xl text-primary lg:text-2xl 2xl:mb-8 2xl:text-3xl">
            For Reservation
          </h2>
          <Formik
            enableReinitialize={true}
            initialValues={{
              'pond-id': pondData?.id?.uuid,
              pondData,
              dayType: 'halfDay',
              dayRates: {
                fullDay: pondData?.attributes?.publicData?.fullDay,
                halfDay: pondData?.attributes?.publicData?.halfDay,
              },
              date: new Date(),
              time: '',
              experience,
              serviceFee: '3.52',
              total: 0,
              'additional-guests': 0,
            }}
            validationSchema={yup.object({
              dayType: yup.string().required('Select a day type!'),
              date: yup.date().required('Select a valid date'),
              time: yup.string().required('Time is required!'),
              'additional-guests': yup
                .number()
                .integer()
                .min(0, 'Number of additional guests must be a positive number')
                .required('Number of additional visitor required!'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(setBookingData(values));
              setTimeout(() => {
                push('/payment-reservation');
              }, 1000);
            }}
          >
            <Form>
              <DaysTypeSelect pondData={pondData} />

              <SelectDateTime pondData={pondData} />

              {/* Experience field */}
              <ExperienceSelect pondData={pondData} />

              <AdditionalAngler />

              <Calculation />

              {!user?.emailVerified && (
                <div className="mb-2  font-trade-gothic-bold text-red-400">
                  Please{' '}
                  <button
                    className="font-trade-gothic-bold text-secondary underline"
                    onClick={recentVerificationEmail}
                  >
                    verify your email
                  </button>{' '}
                  first to book the pond. Or, reload the page if you verified already.
                </div>
              )}

              <button
                type={user?.emailVerified ? 'submit' : 'button'}
                className={`w-full py-2 lg:py-3 2xl:py-5 ${user?.emailVerified
                  ? 'bg-secondary'
                  : 'bg-gray-400'
                  } rounded font-trade-gothic-bold text-white md:text-lg 2xl:text-2xl`}
              >
                Reserve
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SubReservationSection;
