import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaTelegramPlane } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { FormInput, FormTextarea } from '../../../Common';

const PaymentSuccess = () => {
  const { user } = useSelector((state) => state.auth);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values) => {
    setIsDisabled(true);
    setIsLoading(true);
    axios
      .post('https://cms.fishmyspot.com/api/feedbacks', {
        data: {
          name: values.name,
          email: values.email,
          description: values.message,
        },
      })
      .then((res) => {
        toast.success('Feedback submitted successfully');
        setIsLoading(false);
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.log({ err });
        setIsLoading(false);
      });
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
        {!isSubmitted ? (
          <>
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
                  label={'Feedback'}
                  name={'message'}
                  resizeY={true}
                  rows={4}
                />

                <div className="flex justify-end">
                  <button
                    disabled={isDisabled}
                    type="submit"
                    className={`mt-3 inline-flex items-center gap-2 rounded-full ${
                      isDisabled ? 'bg-gray-300' : 'bg-secondary'
                    } px-6 py-2 font-trade-gothic-bold`}
                  >
                    {isLoading ? (
                      <>
                        <span className="flex w-7 animate-spin items-center justify-center">
                          <span className="h-5 w-5 rounded-full border-t-2 border-b-2 border-primary"></span>
                        </span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaTelegramPlane /> Submit{' '}
                      </>
                    )}
                  </button>
                </div>
              </Form>
            </Formik>
          </>
        ) : (
          <div className="">
            <h2 className=" mx-auto mb-2 text-center font-food-truck text-3xl uppercase text-primary xs:w-[230px]">
              Thank you for your feedback
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
