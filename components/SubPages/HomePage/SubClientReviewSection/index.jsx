import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './SubClientReviewSection.module.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Review from '../Review';

const SubClientReviewSection = () => {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className={styles['client-review-container']}>
        <div className='mb-10 xl:mb-16 2xl:mb-24 text-primary text-center'>
          <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-food-truck uppercase'>Our trusted client review</h1>
        </div>
        <Swiper
          slidesPerView={1}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 5000
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SubClientReviewSection;