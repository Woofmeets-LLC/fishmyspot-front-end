import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FiMinus } from "react-icons/fi";
import styles from '../SubSideBar/SubSideBar.module.css';
import SafetyDropDown from '../SafetyDropDown';
import TermsAndPolicyDropDown from '../TermsAndPolicyDropDown';
import HelpCenterDropDown from '../HelpCenterDropDown';

const variants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    y: 5,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
      type: 'spring',
      stiffness: 120
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.03,
    originX: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
    }
  }
}

const AboutFishMySpot = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div>
      <div
        className={`${styles['list-item']} border-b-[1px]`}
        onClick={() => setIsDropDown(!isDropDown)}
      >
        About FishMySpot
        {
          isDropDown ?
            <FiMinus /> :
            <IoIosArrowDown />
        }
      </div>
      <AnimatePresence>
        {
          isDropDown &&
          (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={styles['']}>
              {
                <>
                  <SafetyDropDown />
                  <TermsAndPolicyDropDown />
                  <HelpCenterDropDown />
                </>
              }
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default AboutFishMySpot;