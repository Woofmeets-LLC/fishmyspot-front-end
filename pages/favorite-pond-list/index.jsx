import React, { useState, useEffect } from 'react';
import SubFavoritePondList from '../../components/SubPages/FavoritePondListPage';
import HomeLayout from '../../layouts/HomeLayout';
import SubServices from '../../components/SubPages/ServicesPage/SubServicesList';
import { getSdk } from '../../sharetribe/sharetribeSDK';
import { useCurrentUser } from '../../hooks/users';

const FavoritePondList = () => {
  const [images, setImages] = useState({});
  const [hasMore, setHasMore] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const user = useCurrentUser();

  const getData = (page, newData, ids) => {
    if (newData) {
      setData([]);
    }
    const q = {
      ids: ids ? ids.join(',') : [].join(','),
      perPage: 10,
      page: page,
      include: ['images'],
    };

    getSdk()
      .listings.query(q)
      .then((res) => {
        if (res.data.meta.totalItems) {
          res.data.included
            .filter((d) => {
              return d.type == 'image';
            })
            .forEach((m) => {
              setImages((prevState) => ({
                ...prevState,
                [m.id.uuid]: m.attributes,
              }));
            });
          setCurrentPage(page);
          const newDataSet = newData
            ? [...res.data.data]
            : [...data, ...res.data.data];
          setData(newDataSet);
          setHasMore(
            res.data.meta.totalItems === newDataSet.length ? false : true
          );
        } else {
          setCurrentPage(1);
          setHasMore(false);
        }
      })
      .catch((err) => {
        setData([]);
      });
  };

  useEffect(() => {
    if (user) getData(1, true, user?.profile?.publicData?.favouriteList);
  }, [user]);

  return (
    <HomeLayout>
      <section className="bg-[#fbfbfb]">
        <div className="container">
          {/* <SubFavoritePondList /> */}
          <div className="py-8 sm:py-10 md:pt-12 md:pb-24">
            <SubServices
              fetchData={() => {
                getData(
                  currentPage + 1,
                  false,
                  user?.profile?.publicData?.favouriteList
                );
              }}
              hasMore={hasMore}
              items={data}
              images={images}
            />
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default FavoritePondList;
