// import { enableBodyScroll } from 'body-scroll-lock';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../..';
import { setCloseSignUpModal } from '../../../../store/slices/modalsSlice';
import SignUpWrapper from './SignUpWrapper';

const SignUpModal = () => {
  const { showSignUpModal } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

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
          <SignUpWrapper />
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
