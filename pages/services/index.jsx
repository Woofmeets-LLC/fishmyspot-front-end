import React from 'react';
import Categories from '../../components/SubPages/ServicesPage/Categories';
import SubServices from '../../components/SubPages/ServicesPage/SubServicesList';
import HomeLayout from '../../layouts/HomeLayout';

const Services = () => {
    return (
        <HomeLayout>
            <section className="bg-[#fbfbfb]">
                <div className="container">
                    <Categories />
                    <SubServices />
                </div>
            </section>
        </HomeLayout>

    );
};

export default Services;