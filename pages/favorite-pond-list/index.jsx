/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import SubServices from '../../components/SubPages/ServicesPage/SubServicesList';
import { useCurrentUser } from '../../hooks/users';
import HomeLayout from '../../layouts/HomeLayout';
import { getSdk } from '../../sharetribe/sharetribeSDK';

const FavoritePondList = () => {
  const user = useCurrentUser();
  const favouriteListingIds = user?.profile?.publicData?.favouriteList?.length ? user.profile.publicData?.favouriteList : [];

  const [images, setImages] = useState({})
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState([])

  const getData = (page, newData) => {
    if (newData) {
      setData([]);
    }

    getSdk().listings.query({
      ids: favouriteListingIds,
      perPage: 10,
      page: page,
      include: ["images"]
    })
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

  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: "angler",
        fallbackUrl: "/",
      }}>
      <section className="bg-[#fbfbfb]">
        <div className="container py-6 md:py-10 xl:pt-16 xl:pb-14">
          <SubServices
            fetchData={() => {
              getData(currentPage + 1)
            }}
            hasMore={hasMore}
            items={data}
            images={images}
          />
        </div>
      </section>
    </HomeLayout>
  );
};

export default FavoritePondList;
