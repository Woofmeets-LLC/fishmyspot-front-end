import React from 'react';
import {PropertyCard} from '../../../Common';
import styles from './SubServices.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const SubServices = ({items, fetchData, hasMore, images}) => {
    return (

        <InfiniteScroll
            className={`${styles['services-container']} no-scrollbar`}
            dataLength={items.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            loader={<p style={{textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <b>Loading...</b>
            </p>}
            endMessage={<p style={{textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <b>Nothing Left Here!</b>
            </p>}
        >
            {
                items.map((item) => {
                    return (
                        <PropertyCard
                            key={item.id.uuid}
                            delay={(Math.floor(Math.random() * 10)) / 10}
                            id={item.id.uuid}
                            image={images[item.relationships.images.data[0].id.uuid].variants.default.url}
                            title={item.attributes.title.substring(0, 30) + (item.attributes.title.length > 30 ? '...' : '')}
                            price={`$ ${parseFloat(item.attributes.publicData.halfDay).toFixed(2)}`}
                            ratings={3}

                        />
                    )
                })
            }

        </InfiniteScroll>

    )
};

export default SubServices;