/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import { setBookingData } from '../../../../store/slices/bookingDataSlice';
import Calculation from './Calculation';
import DaysTypeSelect from './DaysTypeSelect';
import ExperienceSelect from './ExperienceSelect';
import SelectDateTime from './SelectDateTime';
import Link from 'next/link';

const SubReservationSection = ({ pondData }) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { user } = useSelector(state => state?.auth);

  const isProfileUpdated = (user?.profile?.publicData?.address && user?.profile?.publicData?.phone) ? true : false;

  useEffect(() => {
    if (!user?.profile?.publicData?.email) {
      getSdk().currentUser.updateProfile({
        publicData: {
          email: user?.email
        }
      }, {
        expand: true,
      })
        .then(() => {
          dispatch(updateUser());
        })
        .catch(() => { })
    }
  }, [])

  const experience = pondData?.attributes?.publicData?.addOns
    ?.reduce((prevObj, currAddOn) => {
      return {
        ...prevObj,
        [currAddOn.title]: {
          checked: false,
          price: currAddOn.price
        }
      }
    }, {})

  const recentVerificationEmail = () => {
    getSdk().currentUser.sendVerificationEmail()
      .then(res => {
        // res.data
        toast.success("Verification email sent.", { duration: 3000 });
      })
  }

  return (
    <div className="order-1 lg:order-2 w-full md:w-2/3 mx-auto lg:w-[420px] 2xl:w-[510px]">
      <div className="bg-white shadow-lg rounded-lg">
        <div className='px-4 py-6 sm:px-7 sm:pt-8 sm:pb-10'>
          <h2 className='text-xl lg:text-2xl 2xl:text-3xl font-food-truck text-primary mb-4 2xl:mb-8'>For Reservation</h2>
          <Formik
            enableReinitialize={true}
            initialValues={{
              'pond-id': pondData?.id?.uuid,
              pondData,
              dayType: 'halfDay',
              dayRates: {
                fullDay: pondData?.attributes?.publicData?.fullDay,
                halfDay: pondData?.attributes?.publicData?.halfDay
              },
              date: new Date(),
              time: '',
              experience,
              serviceFee: "3.52",
              total: 0
            }}
            validationSchema={yup.object({
              dayType: yup.string().required('Select a day type!'),
              date: yup.date().required('Select a valid date'),
              time: yup.string().required('Time is required!'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(setBookingData(values));
              setTimeout(() => {
                push('/payment-reservation')
              }, 1000)
            }}
          >
            <Form>
              <DaysTypeSelect pondData={pondData} />

              <SelectDateTime
                pondData={pondData}
              />

              {/* Experience field */}
              <ExperienceSelect pondData={pondData} />

              <Calculation />

              {
                (!user?.emailVerified && !isProfileUpdated)
                  ? (
                    <div className="text-red-400 font-trade-gothic mb-2">
                      <button className='text-secondary underline font-trade-gothic-bold' onClick={recentVerificationEmail}>Verify your email</button> and {" "}
                      <Link href={"/user-account"}>
                        <a className="text-secondary underline font-trade-gothic-bold">Update your profile</a>
                      </Link>{" "} to book the pond.
                    </div>
                  )
                  : (
                    <>
                      {
                        !user?.emailVerified &&
                        (
                          <div className="text-red-400  font-trade-gothic-bold mb-2">
                            Your email is not verified. Please {" "} <button className='text-secondary underline font-trade-gothic-bold' onClick={recentVerificationEmail}>verify your email</button>{" "} first to book the pond.
                          </div>
                        )
                      }
                      {
                        !isProfileUpdated &&
                        (
                          <div className="font-trade-gothic mb-2">
                            <Link href={"/user-account"}>
                              <a className="text-secondary underline font-trade-gothic-bold">Update your profile</a>
                            </Link>{" "} first to complete transaction.
                          </div>
                        )
                      }
                    </>
                  )
              }

              <button
                type={user?.emailVerified ? 'submit' : 'button'}
                className={`py-2 lg:py-3 2xl:py-5 w-full ${(user?.emailVerified && isProfileUpdated) ? "bg-secondary" : "bg-gray-400"} text-white md:text-lg 2xl:text-2xl font-trade-gothic-bold rounded`}>
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