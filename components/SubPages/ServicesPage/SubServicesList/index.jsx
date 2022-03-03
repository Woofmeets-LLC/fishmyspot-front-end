import React from 'react';
import { PropertyCard } from '../../../Common';
import styles from './SubServices.module.css';

const SubServices = () => {
    return (
        <div className={styles['services-container']}>
            <PropertyCard
                delay={(Math.floor(Math.random() * 10)) / 10}
                id={1}
                image={"/images/pond2.jpg"}
                title={"OH-STARK COUNTY-NAVARRE"}
                price={"$160.00"}
                ratings={3}
            />
            <PropertyCard
                delay={(Math.floor(Math.random() * 10)) / 10}
                id={2}
                image={"/images/pond2.jpg"}
                title={"OH-STARK COUNTY-NAVARRE"}
                price={"$160.00"}
                ratings={3}
            />
            <PropertyCard
                delay={(Math.floor(Math.random() * 10)) / 10}
                id={3}
                image={"/images/pond2.jpg"}
                title={"OH-STARK COUNTY-NAVARRE"}
                price={"$160.00"}
                ratings={3}
            />
            <PropertyCard
                delay={(Math.floor(Math.random() * 10)) / 10}
                id={4}
                image={"/images/pond2.jpg"}
                title={"OH-STARK COUNTY-NAVARRE"}
                price={"$160.00"}
                ratings={3}
            />
            <PropertyCard
                delay={(Math.floor(Math.random() * 10)) / 10}
                id={5}
                image={"/images/pond2.jpg"}
                title={"OH-STARK COUNTY-NAVARRE"}
                price={"$160.00"}
                ratings={3}
            />
            <PropertyCard
                delay={(Math.floor(Math.random() * 10)) / 10}
                id={6}
                image={"/images/pond2.jpg"}
                title={"OH-STARK COUNTY-NAVARRE"}
                price={"$160.00"}
                ratings={3}
            />
            <PropertyCard
                delay={(Math.floor(Math.random() * 10)) / 10}
                id={7}
                image={"/images/pond2.jpg"}
                title={"OH-STARK COUNTY-NAVARRE"}
                price={"$160.00"}
                ratings={3}
            />
            <PropertyCard
                delay={(Math.floor(Math.random() * 10)) / 10}
                id={8}
                image={"/images/pond2.jpg"}
                title={"OH-STARK COUNTY-NAVARRE"}
                price={"$160.00"}
                ratings={3}
            />

        </div>
    );
};

export default SubServices;