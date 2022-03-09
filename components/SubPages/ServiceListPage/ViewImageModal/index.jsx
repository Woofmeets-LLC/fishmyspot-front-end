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
      rounded={15}
    >
      <div className='w-[1100px] h-[600px] view-image-modal'>
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
      </div>
    </Modal>
  );
};

export default ViewImageModal;