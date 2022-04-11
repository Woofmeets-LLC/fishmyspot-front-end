/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaHeart, FaMapMarkerAlt, FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useCurrentUser } from '../../../hooks/users/index';
import { getSdk } from '../../../sharetribe/sharetribeSDK';
import {
  updateUser
} from '../../../store/slices/authSlice';

const PropertyCard = ({ delay, location, image, id, title, ratings, price, reviewCount = 0 }) => {
  const user = useCurrentUser();
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user) {
      const prevFabList = user?.profile?.publicData?.favouriteList?.length
        ? user.profile.publicData?.favouriteList
        : [];
      for (let i = 0; i < prevFabList.length; i++) {
        if (prevFabList[i] === id) {
          setIsFavorite(true);
          return;
        }
      }
    }
  }, [user]);

  const addToFavorites = () => {
    if (user) {
      if (user.profile.publicData.account_type == 'angler') {
        const prevFabList = user.profile.publicData?.favouriteList?.length
          ? user.profile.publicData?.favouriteList
          : [];
        getSdk()
          .currentUser.updateProfile({
            publicData: {
              favouriteList: [...prevFabList, id],
            },
          })
          .then(() => {
            dispatch(updateUser());
            setIsFavorite(!isFavorite);
          })
          .catch(() => { });
      }
    }
  };

  const removeFromFav = () => {
    if (user) {
      if (user.profile.publicData.account_type == 'angler') {
        const prevFabList = user.profile.publicData?.favouriteList?.length
          ? user.profile.publicData?.favouriteList.filter((f) => id != f)
          : [];
        getSdk()
          .currentUser.updateProfile({
            publicData: {
              favouriteList: prevFabList,
            },
          })
          .then(() => {
            dispatch(updateUser());
            setIsFavorite(!isFavorite);
          })
          .catch(() => { });
      }
    }
  };

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        delay: delay,
      }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative">
        <Link href={`/pond-details/${id}`}>
          <a>
            <div className="w-full h-[190px] sm:h-[160px] lg:h-[180px] 2xl:h-[237px]">
              <img
                src={image}
                alt="Pond"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </a>
        </Link>
        <span className="absolute bg-secondary text-xs font-trade-gothic-bold text-primary py-1 px-2 sm:px-2 sm:py-1 md:py-2 md:px-3 top-3 left-3 lg:top-5 lg:left-4 rounded">Feature Spot</span>
        <div className="p-3">
          <div className="absolute -mt-6 right-2">
            <span className="bg-secondary inline-block text-base md:text-lg text-white rounded-md p-2 cursor-pointer">
              {isFavorite ? (
                <FaHeart
                  onClick={() => {
                    if (user) {
                      removeFromFav();
                    }
                  }}
                />
              ) : (
                <FaRegHeart
                  onClick={() => {
                    if (user) {
                      addToFavorites();
                    }
                  }}
                />
              )}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-sm md:text-base">
            <span className="text-secondary inline-block">
              <FaMapMarkerAlt />
            </span>
            <span className="font-trade-gothic text-[15px] text-highlight-1">{location}</span>
          </div>
          <div className="mt-1 md:my-2 xl:w-[230px] 2xl:max-w-[240px] sm:h-14">
            <Link href={`/pond-details/${id}`}>
              <a>
                <h4 className="font-trade-gothic-bold text-base md:text-lg xl:text-xl text-primary uppercase">{title}</h4>
              </a>
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-1 xl:space-x-2 text-highlight-3 text-sm xl:text-base">
              {
                [1, 2, 3, 4, 5].map((i) => (i <= Math.floor(+ratings || 5) ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />))
              }
              {" "}({reviewCount})
            </div>
            <div>
              <span className="font-trade-gothic-bold text-base sm:text-lg md:text-xl xl:text-2xl text-primary block">{price}</span>
              <span className="font-trade-gothic text-xs text-highlight-3">half day</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
