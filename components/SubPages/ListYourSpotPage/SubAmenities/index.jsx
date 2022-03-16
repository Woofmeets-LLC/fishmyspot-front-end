import React from 'react';
import AddOns from './AddOns';
import Amenities from './Amenities';
import AmenitiesPhotos from './AmenitiesPhotos';

const SubAmenities = () => {
    return (
        <div>
            <Amenities />
            <AddOns />
            <AmenitiesPhotos />
        </div>
    );
};

export default SubAmenities;