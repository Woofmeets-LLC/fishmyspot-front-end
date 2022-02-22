import React from 'react';
import styles from './Review.module.css';

const Review = () => {
  return (
    <div className={styles['review-area']}>
      <div className={styles['review-area-wrapper']}>
        <div className={styles['review-area-info']}>
          <div className={styles['review-image-area']}>
            <img
              src="/images/client.jpg "
              alt="Client"
              className='w-full h-full object-cover rounded-full' />
          </div>
          <div>
            <h2 className={styles['review-title']}>Howard Arlene</h2>
            <span className={styles['designation']}>Finance Manager</span>
          </div>
        </div>
        <div className='mt-3 3xl:mt-5 3xl:pl-5'>
          <p className={styles['review-description']}> "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."</p>
        </div>
      </div>
    </div>
  );
};

export default Review;