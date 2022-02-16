import React from 'react';
import PropertyCard from '../../../Common/PropertyCard';
import Categories from '../Categories';

const SubServices = () => {
    return (
        <div className='container'>
            <Categories />
            <div className='grid grid-cols-4 gap-x-7 gap-y-14'>
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>
        </div>
    );
};

export default SubServices;