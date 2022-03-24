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
import styles from './PropertyCard.module.css';

const PropertyCard = ({ delay, image, id, title, ratings, price, reviewCount = 0 }) => {
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
      console.log(user);
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
      className={styles['card-container']}
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
        <span className={styles.feature}>Feature Spot</span>
        <div className="p-3">
          <div className="absolute -mt-6 right-2">
            <span className={styles.wishlist}>
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
          <div className={styles.location}>
            <span className="text-secondary inline-block">
              <FaMapMarkerAlt />
            </span>
            <span className="font-trade-gothic text-highlight-1">location</span>
          </div>
          <div className="mt-1 md:my-2 xl:w-[230px] 2xl:max-w-[240px] sm:h-14">
            <Link href={`/pond-details/${id}`}>
              <a>
                <h4 className={styles['card-heading']}>{title}</h4>
              </a>
            </Link>
          </div>
          <div className="flex justify-between">
            <div className={styles.ratings}>
              {
                [1, 2, 3, 4, 5].map((i) => (i <= Math.floor(+ratings || 5) ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />))
              }
              {" "}({reviewCount})
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

export default PropertyCard;
