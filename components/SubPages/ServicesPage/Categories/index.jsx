import React from 'react';
import PriceSlider from '../PriceSlider';
import Location from '../Location';
import TypeFish from '../TypeFish';
import UserRating from '../UserRating';
import Experience from '../Experience';

const Categories = () => {

    return (
        <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0 md:space-x-3 lg:space-x-4 mt-16 mb-14">
            <Location />
            <PriceSlider />
            <TypeFish />
            <UserRating />
            <Experience />
        </div >
    );
};

export default Categories;