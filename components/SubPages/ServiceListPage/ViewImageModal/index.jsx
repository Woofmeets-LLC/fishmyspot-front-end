import { enableBodyScroll } from 'body-scroll-lock';
import React from 'react';
import Slider from 'react-slick';
import { Modal } from '../../../Common';

const ViewImageModal = ({ pondImages, imageModal, setImageModal }) => {
  const handleClose = () => {
    setImageModal(false);
    enableBodyScroll(document?.body);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Modal
      isOpen={imageModal}
      isOverflowY={false}
      onClose={handleClose}
      rounded={4}
    >
      <div className="pond-details-slider view-image-modal relative h-[200px] w-[300px] sm:h-[230px] sm:w-[360px] md:h-[360px] md:w-[600px] lg:h-[400px] lg:w-[700px] xl:h-[450px] xl:w-[800px] 2xl:h-[480px] 2xl:w-[900px] 3xl:h-[600px] 3xl:w-[1100px]">
        <Slider {...settings}>
          {pondImages?.map((image, index) => (
            <div
              key={index}
              className="relative h-[200px] w-[300px] bg-gray-100 sm:h-[230px] sm:w-[360px] md:h-[360px] md:w-[600px] lg:h-[400px] lg:w-[700px] xl:h-[450px] xl:w-[800px] 2xl:h-[480px] 2xl:w-[900px] 3xl:h-[600px] 3xl:w-[1100px]"
            >
              <img
                src={image}
                alt="pond"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-0 right-0">
          <span
            onClick={() => handleClose()}
            className="cursor-pointer bg-black bg-opacity-50 px-3 py-1"
          >
            <span className="text-sm text-white lg:text-base">Close</span>
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default ViewImageModal;
