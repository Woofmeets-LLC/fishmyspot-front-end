import { useEffect, useState } from 'react';
import { useCurrentUser } from '../../../hooks/users/currentUserHooks';
import { getSdk } from '../../../sharetribe/sharetribeSDK';
import { PropertyCard } from '../../Common';
import SubServices from '../ServicesPage/SubServicesList';

const SubFavoritePondList = () => {
  const user = useCurrentUser();
  // console.log(user);
  const [favouriteList, setFavouriteList] = useState([]);
  const favouriteListingIds = user?.profile?.publicData?.favouriteList?.length ? user.profile.publicData?.favouriteList : [];
  console.log(favouriteListingIds);

  const [images, setImages] = useState({})
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState([])

  const getData = (page, newData) => {
    if (newData) {
      setData([]);
    }

    getSdk().listings.query(favouriteListingIds)
      .then(res => {
        if (res.data.meta.totalItems) {
          res.data.included.filter(d => {
            return d.type == 'image'
          }).forEach(m => {
            setImages(prevState => ({ ...prevState, [m.id.uuid]: m.attributes }))
          })
          setCurrentPage(page)
          const newDataSet = newData ? [...res.data.data] : [...data, ...res.data.data]
          setData(newDataSet)
          setHasMore(res.data.meta.totalItems === newDataSet.length ? false : true)
        } else {
          setCurrentPage(1)
          setHasMore(false)
        }


      })
      .catch(err => {
        setData([])
      })
  }

  useEffect(() => {
    getData(1, true)
  }, [user])

  // useEffect(() => {
  //   getSdk().listings.query(favouriteListingIds)
  //     .then(res => {
  //       // res.data contains the response data
  //       setFavouriteList(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, [])

  return (
    <div className="container">
      <SubServices
        fetchData={() => {
          getData(currentPage + 1)
        }}
        hasMore={hasMore}
        items={data}
        images={images}
      />
    </div>
  );
};

export default SubFavoritePondList;
