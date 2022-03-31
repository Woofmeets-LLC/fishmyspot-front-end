import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { compareDates } from '../../../../services/date/compare-dates';
import { setBookingData } from '../../../../store/slices/bookingDataSlice';
import Calculation from './Calculation';
import DaysTypeSelect from './DaysTypeSelect';
import ExperienceSelect from './ExperienceSelect';
import SelectDateTime from './SelectDateTime';

const SubReservationSection = ({ pondData }) => {
  const dispatch = useDispatch();
  const { push } = useRouter();

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
              const datesCompare = compareDates(new Date(), values.date);

              if (datesCompare.newTime >= datesCompare.todayTime) {
                dispatch(setBookingData(values));
                setTimeout(() => {
                  push('/payment-reservation')
                }, 1000)
              }
            }}
          >
            <Form>
              <DaysTypeSelect pondData={pondData} />

              <SelectDateTime pondData={pondData} />

              {/* Experience field */}
              <ExperienceSelect pondData={pondData} />

              <Calculation />

              <button
                type='submit'
                className='py-2 lg:py-3 2xl:py-5 w-full bg-secondary text-white md:text-lg 2xl:text-2xl font-trade-gothic-bold rounded'>
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