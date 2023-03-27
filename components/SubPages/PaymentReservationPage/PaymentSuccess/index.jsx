import { Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { FormInput, FormTextarea } from '../../../Common';

const PaymentSuccess = () => {
  const { user } = useSelector((state) => state.auth);
  const handleSubmit = (values) => {
    console.log({ values });
  };
  return (
    <div className="mx-auto pt-3 md:w-2/3 md:pt-5 xl:pt-10">
      <div className="mb-7 rounded-xl py-5 px-5 shadow">
        <h1 className="mb-4 text-center  font-trade-gothic text-xl text-highlight-1 md:text-2xl xl:mb-6  2xl:mb-8">
          Thank you,{' '}
          {user && `${user?.profile?.firstName} ${user?.profile?.lastName}`}!
        </h1>
        <h1 className=" text-center font-food-truck text-2xl uppercase text-primary underline md:text-3xl ">
          Keep an eye on your email!!
        </h1>
      </div>

      <div className="rounded-xl py-5 px-5 shadow">
        <h2 className=" mb-2 text-center font-food-truck text-3xl text-primary">
          Give us your feedback
        </h2>
        <Formik
          initialValues={{
            name: `${user?.profile?.firstName} ${user?.profile?.lastName}`,
            email: user?.email,
          }}
          validationSchema={yup.object({
            name: yup.string().required('Name is required'),
            email: yup.string().required('Email is required'),
          })}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          <Form>
            <FormInput
              label={'Name'}
              name={'name'}
              disabled
              placeholder="Enter your name"
            />
            <FormInput
              label={'Email'}
              name={'email'}
              disabled
              placeholder="Enter your email"
            />
            <FormTextarea
              label={'Give your feedback'}
              name={'message'}
              resizeY={true}
              rows={4}
            />

            <div className="flex justify-end">
              <button
                className="rounded bg-secondary py-2 px-6 font-trade-gothic-bold text-lg text-primary 2xl:py-3"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PaymentSuccess;
