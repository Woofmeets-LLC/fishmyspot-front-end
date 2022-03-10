import React from 'react';
import { enableBodyScroll } from 'body-scroll-lock';
import Slider from "react-slick";
import { Modal } from '../../../Common';

const ViewImageModal = ({ imageModal, setImageModal }) => {
  const handleClose = () => {
    setImageModal(false);
    enableBodyScroll(document?.body);
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Modal
      isOpen={imageModal}
      isOverflowY={false}
      onClose={handleClose}
      rounded={0}
    >
      <div className='w-[300px] sm:w-[360px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] 3xl:w-[1100px] h-[200px] sm:h-[230px] md:h-[360px] lg:h-[400px] xl:h-[450px] 2xl:h-[480px] 3xl:h-[600px] view-image-modal relative'>
        <Slider {...settings}>
          <div>
            <img src="/images/pond1.jpg" alt="pond" className='w-full h-full object-cover' />
          </div>
          <div>
            <img src="/images/pond2.jpg" alt="pond" className='w-full h-full object-cover' />
          </div>
          <div>
            <img src="/images/client.jpg" alt="pond" className='w-full h-full object-cover' />
          </div>
        </Slider>
        <div className='absolute top-2 right-4'>
          <span
            onClick={() => handleClose()}
            className='bg-black bg-opacity-0 cursor-pointer'>
            <span className='text-white'>clear</span>
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default ViewImageModal;