import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PropertyCard } from '../../../Common';
import styles from './SubServices.module.css';

const SubServices = ({ items, fetchData, hasMore, images }) => {
  return (

    <InfiniteScroll
      className={`${styles['services-container']} no-scrollbar`}
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<p
        className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
        style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <b>Loading...</b>
      </p>}
      endMessage={<p
        className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
        style={{ textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <b>No more ponds found. Click on Fish Now and add your favorite spots!!</b>
      </p>}
    >
      {
        items.map((item) => {
          return (
            <PropertyCard
              key={item?.id?.uuid}
              delay={(Math.floor(Math.random() * 10)) / 10}
              id={item?.id?.uuid}
              image={images?.[item?.relationships?.images?.data?.[0]?.id?.uuid]?.variants?.default?.url}
              location={`${item?.attributes?.publicData?.city} - ${item?.attributes?.publicData?.zipCode}`}
              title={item?.attributes?.title.substring(0, 30) + (item?.attributes?.title.length > 30 ? '...' : '')}
              price={`$ ${parseFloat(item?.attributes?.publicData?.halfDay).toFixed(2)}`}
              ratings={item?.attributes?.publicData?.absoluteRating || item?.attributes?.publicData?.rating}
              reviewCount={item?.attributes?.publicData?.reviewCount || 0}
            />
          )
        })
      }

    </InfiniteScroll>

  )
};

export default SubServices;
