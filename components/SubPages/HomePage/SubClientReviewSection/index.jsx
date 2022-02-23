import React from 'react';
import styles from './SubClientReviewSection.module.css';
import Slider from "react-slick";
import Review from '../Review';

const SubClientReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <section className='bg-[#fcfcfc] overflow-x-hidden'>
      <div className={`${styles['client-review-container']} reviews-container`}>
        <div className='mb-10 xl:mb-16 2xl:mb-24 text-primary text-center'>
          <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-food-truck uppercase'>Our trusted client review</h1>
        </div>
        <Slider {...settings}>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </Slider>
      </div>
    </section>
  );
};

export default SubClientReviewSection;