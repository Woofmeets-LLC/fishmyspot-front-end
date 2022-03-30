import { useEffect, useState } from 'react';
import { getSdk } from '../../sharetribe/sharetribeSDK';
import useCurrentUser from '../users/currentUserHooks';

const useMangeListing = () => {
  const user = useCurrentUser();

  const [favoriteList, setFavoriteList] = useState([]);
  useEffect(() => {
    if (user) {
      setFavoriteList(user?.profile?.publicData?.favoriteList);
    }
  }, [user]);

  const updateFavoriteListing = (listingId, isFavorite) => {
    const newFavoriteList = [];
    if (isFavorite) {
      newFavoriteList = favoriteList.filter((id) => listingId !== id);
    } else {
      newFavoriteList = [...favoriteList, listingId];
    }
    getSdk()
      .currentUser.updateProfile(
        {
          publicData: {
            favoriteList: [...newFavoriteList],
          },
        },
        {
          expand: true,
          include: ['profileImage'],
        }
      )
      .then((res) => {
        
      });
    setFavoriteList(newFavoriteList);
  };
  return { favoriteList, updateFavoriteListing };
};

export default useMangeListing;
