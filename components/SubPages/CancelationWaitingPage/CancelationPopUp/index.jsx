import React from 'react';
import { enableBodyScroll } from 'body-scroll-lock';
import { FaTimes } from 'react-icons/fa';
import { Modal } from '../../../Common';

const CancelationPopUp = ({ modalOpen, setModalOpen }) => {

  const handleClose = () => {
    setModalOpen(false);
    enableBodyScroll(document?.body);
  }
  return (
    <Modal
      isOpen={modalOpen}
      isOverflowY={false}
      onClose={handleClose}
      rounded={15}
    >
      <div className='w-[320px] md:w-[400px] lg:w-[490px] 2xl:w-[528px] bg-white relative'>
        <div className='py-6 px-6 md:py-8 md:px-10 lg:py-10 lg:px-12 2xl:py-12 2xl:px-16'>
          <div className="absolute top-4 right-6 md:top-6 md:right-8 lg:top-8 lg:right-10 2xl:top-11 2xl:right-12 text-lg lg:text-xl 2xl:text-2xl">
            <button onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <h4 className='text-base md:text-lg lg:text-xl 2xl:text-2xl text-primary font-trade-gothic-bold'>Are you sure you want to cancel this reservation?</h4>

          <div className='space-x-2 md:space-x-4 lg:space-x-6 text-right mt-7 md:mt-8 lg:mt-11 2xl:mt-14 text-sm lg:text-base font-trade-gothic text-white'>
            <button
              className='px-8 py-2 md:px-10 lg:py-3 lg:px-11 2xl:py-4 2xl:px-12 bg-[#65947e] rounded-lg 2xl:rounded-[10px]'
            >
              No
            </button>
            <button
              className='px-8 py-2 md:px-10 lg:py-3 lg:px-11 2xl:py-4 2xl:px-12 bg-[#ff6546] rounded-lg 2xl:rounded-[10px]'
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CancelationPopUp;