// import { enableBodyScroll } from 'body-scroll-lock';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Modal } from '../..';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import {
  setCloseSignUpModal,
  setShowLoginModal,
} from '../../../../store/slices/modalsSlice';
import SignUpForm from './SignUpForm';

const SignUpModal = () => {
  // States
  const [isLoading, setIsLoading] = useState(false);

  const { showSignUpModal } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
    type: '',
    isAgree: '',
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    email: yup.string().email().required('Required'),
    phone: yup
      .string()
      .required('Required')
      .test('phone', 'This is not valid phone number!', (value, context) => {
        const regExp =
          /^(\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
        if (regExp.test(value)) {
          return true;
        }
        return false;
      }),
    password: yup.string().required('Required').min(8, 'Too Short!'),
    gender: yup.string().required('Required'),
    type: yup.string().required('Required'),
    isAgree: yup
      .boolean()
      .oneOf([true], 'Please read and agree by clicking on box!')
      .required('Required'),
  });

  const handleSubmit = (values, helpers) => {
    setIsLoading(true);
    getSdk()
      .currentUser.create(
        {
          email: values?.email,
          password: values?.password,
          firstName: values?.firstName,
          lastName: values?.lastName,
          publicData: {
            gender: values?.gender,
            account_type: values?.type,
            email: values?.email,
            phone: values?.phone,
          },
        },
        {
          expand: true,
        }
      )
      .then((res) => {
        setIsLoading(false);
        toast('Sign up successful, you can login!', { type: 'success' });
        dispatch(setShowLoginModal());
      })
      .catch(() => {
        setIsLoading(false);
        toast('Email is already taken!', { type: 'error' });
      });
  };

  const handleClose = () => {
    dispatch(setCloseSignUpModal());
    // enableBodyScroll(document?.body);
  };

  return (
    <Modal
      isOpen={showSignUpModal}
      isOverflowY={false}
      rounded={15}
      onClose={handleClose}
    >
      <div className="mb-3 pt-3 pr-5 text-right">
        <button onClick={handleClose}>
          <FaTimes />
        </button>
      </div>
      <h2 className="text-center font-food-truck text-3xl text-primary xl:text-4xl 2xl:text-[44px] 3xl:text-5xl">
        CREATE AN ACCOUNT
      </h2>
      <div className="max-h-[90vh] min-h-[300px] pl-8 pr-6 pt-4 pb-10 sm:w-[350px] smd:w-[420px] md:w-[500px] xl:pl-10 xl:pr-8 2xl:w-[593px] 2xl:pl-14 2xl:pr-12 3xl:pl-20 3xl:pr-[72px] 3xl:pt-6 3xl:pb-10">
        <div className="sidebar max-h-[57vh] min-h-[200px] pr-2">
          {/* Formik form  */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={handleSubmit}
          >
            <Form>
              <SignUpForm />
              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center bg-secondary py-2 text-center font-trade-gothic-bold text-white"
              >
                {isLoading && (
                  <span className="flex w-7 animate-spin items-center justify-center">
                    <span className="h-5 w-5 rounded-full border-t-2 border-b-2 border-white"></span>
                  </span>
                )}
                {isLoading ? 'Loading...' : `Sign Up`}
              </button>
            </Form>
          </Formik>

          {/* <div className="grid grid-cols-2 gap-4 mt-5">
                        <button
                            className="flex justify-center items-center gap-2 w-full border border-transparent bg-blue-600 text-white text-center font-bold py-[6px]">
                            <FaFacebookF /> Facebook
                        </button>
                        <button
                            className="flex justify-center items-center gap-2 w-full shadow border border-gray-50 text-primary text-center font-bold py-[6px]">
                            <FcGoogle /> Google
                        </button>
                    </div> */}
          <div className="mt-5 text-center">
            Already have an account?
            <button
              onClick={() => dispatch(setShowLoginModal())}
              className="ml-2 inline-block font-trade-gothic-bold text-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
