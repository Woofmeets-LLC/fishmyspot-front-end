/* eslint-disable @next/next/no-img-element */
import { enableBodyScroll } from 'body-scroll-lock';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import * as yup from 'yup';
import { Modal } from '../..';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPasswordModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const initialValues = {
    email: '',
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Required'),
  });

  const handleSubmit = (values) => {
    setIsSuccess(true);
  };
  const handleClose = () => {
    enableBodyScroll(document?.body);
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      isOverflowY={false}
      rounded={15}
      onClose={handleClose}
    >
      <div className="mb-3 pt-3 pr-5 text-right">
        <button onClick={handleClose}>
          <FaTimes />
        </button>
      </div>
      <div className="max-h-[90vh] min-h-[300px] pl-8 pr-6 pb-10 sm:w-[350px] smd:w-[420px] md:w-[500px] xl:pl-10 xl:pr-8 2xl:w-[593px] 2xl:pl-14 2xl:pr-12 3xl:pl-20 3xl:pr-[72px] 3xl:pb-10">
        <div className="sidebar max-h-[73vh] min-h-[310px] pr-2">
          <div className="pb-8">
            <div className="mb-2 2xl:mb-4">
              <img
                className="mx-auto mt-4 h-28 w-28 2xl:h-[125px] 2xl:w-[125px]"
                src="/images/key-circle.png"
                alt=""
              />
            </div>
            <h2 className="mb-3 text-center font-food-truck text-3xl text-primary xl:text-4xl 2xl:mb-5 2xl:text-[44px] 3xl:text-5xl">
              {' '}
              RESET PASSWORD
            </h2>
            <p className="mb-4 px-2 text-center font-trade-gothic 2xl:mb-6">
              Create a unique password by adding a memorable phrase and numbers
              like your birthdate, plus random symbols for security. Voila!
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={handleSubmit}
            >
              <Form>
                <ResetPasswordForm />
                <button
                  type="submit"
                  className="mt-5 block w-full bg-highlight-3 py-2 text-center font-trade-gothic-bold text-white 2xl:mt-8"
                >
                  Save
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ResetPasswordModal;
