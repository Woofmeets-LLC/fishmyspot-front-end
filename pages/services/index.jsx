import React from 'react';
import Categories from '../../components/SubPages/ServicesPage/Categories';
import SubServices from '../../components/SubPages/ServicesPage/SubServicesList';

const Services = () => {
    return (
        <div className="container bg-[#fbfbfb]">
            <Categories />
            <SubServices />
        </div>
    );
};

export default Services;