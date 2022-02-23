import React from 'react';
import styles from './SubListingYourSpotSection.module.css';

const SubListingYourSpotSection = () => {
  return (
    <section className='container'>
      <div className={styles['sub-listing-container']}>
        <div className='grid md:grid-cols-2'>
          <div className='mx-auto my-auto'>
            <img
              src="/images/FatherSonFishing.jpg"
              alt="Father Son Fishing"
              className='w-[240px] h-[240px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[484px] 2xl:h-[484px] object-cover rounded-full'
            />
          </div>
          <div className='xl:mt-8'>
            <h1 className={styles['title']}>Find out how much you can make listing your spot</h1>
            <span className='w-[140px] h-[6px] bg-secondary block rounded-full mt-4'></span>
            <p className={styles['sub-listing-content']}>Growing up, we had a love for fishing untapped water holes. As we grew in to adults, we have the same passion for finding untapped water holes, but found it more difficult to fish because of asking permission and finding ponds that are convenient and accessible.</p>
            <button className={styles['sub-listing-button']}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubListingYourSpotSection;