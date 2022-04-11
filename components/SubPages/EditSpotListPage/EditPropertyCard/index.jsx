import { motion } from "framer-motion";
import Link from 'next/link';
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const EditPropertyCard = ({ id, image, title, price, delay, ratings, reviewCount = 0, location }) => {
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
      className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <div className="w-full h-[190px] sm:h-[160px] lg:h-[180px] 2xl:h-[237px]">
          <img
            src={image}
            alt="Pond"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="p-3">
          <div className="flex items-center space-x-1 text-sm md:text-base">
            <span className="text-secondary inline-block">
              <FaMapMarkerAlt />
            </span>
            <span className="font-trade-gothic text-[15px] text-highlight-1">{location}</span>
          </div>
          <div className="mt-1 md:my-2 xl:w-[230px] 2xl:max-w-[240px] sm:h-14">
            <h4 className="font-trade-gothic-bold text-base md:text-lg xl:text-xl text-primary uppercase">{title}</h4>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex items-center space-x-1 text-highlight-3 text-sm xl:text-base mt-1 mb-[22px]">
                {
                  [1, 2, 3, 4, 5].map((i) => (i <= Math.floor(+ratings || 5) ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />))
                }
                {" "}({reviewCount})
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
              <span className="font-trade-gothic-bold text-base sm:text-lg md:text-xl xl:text-2xl text-primary block mt-4 sm:mt-2">{price}</span>
              <span className="font-trade-gothic text-xs text-highlight-3">half day</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EditPropertyCard;