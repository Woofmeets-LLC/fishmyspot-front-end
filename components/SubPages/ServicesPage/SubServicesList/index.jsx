import React from 'react';
import PropertyCard from '../../../Common/PropertyCard';
import styles from './SubServices.module.css';

const SubServices = () => {
    return (
        <div className={styles['services-container']}>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
        </div>
    );
};

export default SubServices;