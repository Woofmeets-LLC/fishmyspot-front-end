import { motion } from "framer-motion";
import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import styles from './EditPropertyCard.module.css';

const EditPropertyCard = ({ id, image, title, price, delay }) => {
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
        <div className="w-full h-[190px] sm:h-[160px] lg:h-[180px] 2xl:h-[237px]">
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
              <Link href={`/edit-pond/pond-listing/${id}`}>
                <a
                  className='bg-secondary py-1 px-3 text-white text-sm font-trade-gothic-bold rounded'
                >
                  Edit
                </a>
              </Link>
            </div>
            <div>
              <span className={styles.price}>{price}</span>
              <span className={styles['per-hour']}>half day</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EditPropertyCard;