import React from 'react';
import styles from './Review.module.css';

const Review = ({ name, review, location, image }) => {
  return (
    <div className={styles['review-area']}>
      <div className={styles['review-area-wrapper']}>
        <div className="h-[213px] md:h-[194px] grid grid-cols-12 gap-4">
          <div className="col-span-4 overflow-hidden">
            <div className="h-full aspect-[20/25]">
              <img
                src={image}
                className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div className="col-span-8">
            <div className="py-3 pr-3">
              <h2 className="text-[17px] font-trade-gothic-bold">{name} </h2>
              <p className="text-sm font-trade-gothic">{review}</p>
              <span className="inline-block text-xs  font-trade-gothic font-semibold">{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;