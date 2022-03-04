import React from 'react';
import { FaMapMarkerAlt, FaStar, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from './EditPropertyCard.module.css';

const EditPropertyCard = ({ image, title, price, delay }) => {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        delay: delay
      }}
      className={styles['card-container']}>
      <div className="relative">
        <div className="w-full h-[190px] sm:h-auto">
          <img
            src={image}
            alt="Pond"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="p-3">
          <div className={styles.location}>
            <span className="text-secondary inline-block">
              <FaMapMarkerAlt />
            </span>
            <span className="font-trade-gothic text-highlight-1">location</span>
          </div>
          <div className="mt-1 md:my-2 xl:w-[230px] 2xl:max-w-[240px] sm:h-14">
            <h4 className={styles['card-heading']}>{title}</h4>
          </div>
          <div className="flex justify-between">
            <div>
              <div className={styles.ratings}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <button
                className='bg-secondary py-1 px-3 text-white text-xs font-trade-gothic-bold rounded'
              >
                Edit
              </button>
            </div>
            <div>
              <span className={styles.price}>{price}</span>
              <span className={styles['per-hour']}>per hour</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EditPropertyCard;