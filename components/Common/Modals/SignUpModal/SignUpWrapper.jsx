import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import SignUpForm from './SignUpForm';

const SignUpWrapper = ({ mode }) => {
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
    type: mode == 'owner' ? 'owner' : '',
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
            showReferralModal: true,
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
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        <Form>
          <SignUpForm mode={mode} />
          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center bg-secondary py-2 text-center font-trade-gothic-bold text-white"
          >
            {isLoading && (
              <span className="flex w-7 animate-spin items-center justify-center">
                <span className="h-5 w-5 rounded-full border-t-2 border-b-2 border-white"></span>
              </span>
            )}
            {isLoading
              ? 'Loading...'
              : mode == 'owner'
              ? 'Start My Listing'
              : `Sign Up`}
          </button>
        </Form>
      </Formik>

      <div className="mt-5 text-center">
        Already have an account?
        <button
          onClick={() => dispatch(setShowLoginModal())}
          className="ml-2 inline-block font-trade-gothic-bold text-primary"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default SignUpWrapper;
