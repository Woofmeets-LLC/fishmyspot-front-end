import React, { useEffect, useState } from 'react';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import EditPropertyCard from '../EditPropertyCard';

const SubEditSpotListSection = () => {
  const [ownListings, setOwnListings] = useState([]);
  useEffect(() => {
    getSdk().ownListings.query({
      include: ["images"],
    })
      .then(res => {
        const data = res?.data?.data;
        const included = res?.data?.included;
        const formattedData = data?.map(listing => {
          return {
            ...listing,
            relationships: {
              ...listing.relationships,
              images: {
                data: listing?.relationships?.images?.data?.map(image => {
                  return included?.find(included => included.id.uuid === image.id.uuid);
                })
              }
            }
          }
        });

        // Set formatted data to state
        setOwnListings(formattedData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(ownListings);
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-5 2xl:gap-7 pt-8 pb-8 md:pt-12 md:pb-14'>
      {
        ownListings.map((listing, index) => (
          <EditPropertyCard
            key={listing?.id?.uuid}
            delay={(Math.floor(Math.random() * 10)) / 10}
            id={listing?.id?.uuid}
            image={listing?.relationships?.images?.data?.[0]?.attributes?.variants?.default?.url}
            title={listing?.attributes?.title}
            price={`$${listing?.attributes?.publicData?.halfDay}`}
            ratings={3}
          />
        ))
      }
    </div>
  );
};

export default SubEditSpotListSection;