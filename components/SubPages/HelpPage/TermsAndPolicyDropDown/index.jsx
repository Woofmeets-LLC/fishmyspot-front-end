import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

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

const TermsAndPolicyDropDown = ({ setIsShowContent }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const options = [
    'Privacy Policy',
    'Payments Terms of Service',
    'Terms of Service',
    'Legal resources',
    'Money Transmission License Disclosures'
  ];

  return (
    <div>
      <div
        className={`flex items-center justify-between pb-3 cursor-pointer text-xl font-trade-gothic text-primary pt-7`}
        onClick={() => setIsDropDown(!isDropDown)}
      >
        Terms and policies
        {
          isDropDown ?
            <IoIosArrowUp /> :
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
              className="pt-5 pl-4 pr-6 z-50">
              {
                options?.map((option, i) => {
                  return (
                    <div
                      key={"termsAndPolicy" + (i + 1)}
                      className="flex items-center space-x-3 mb-4 text-sm md:text-base font-trade-gothic text-primary cursor-pointer max-w-[237px]"
                      onClick={() => setIsShowContent("termsAndPolicy" + (i + 1))}
                    >
                      <motion.span
                        htmlFor={option}
                        variants={hoverVariants}
                        whileHover="hover"
                      >
                        {option}
                      </motion.span>

                    </div>
                  )
                })
              }
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default TermsAndPolicyDropDown;