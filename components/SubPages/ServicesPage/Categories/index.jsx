import React, { useEffect, useState } from 'react';
import PriceSlider from '../PriceSlider';
import Location from '../Location';
import TypeFish from '../TypeFish';
import UserRating from '../UserRating';
import Experience from '../Experience';
import { useRouter } from 'next/router';
import styles from './Categories.module.css';

const Categories = () => {
    const router = useRouter();
    const { query } = router;

    const [selectedCities, setSelectedCities] = useState([]);
    const [typeFish, setTypeFish] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [experience, setExperience] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 1000]);

    useEffect(() => {
        if (query?.locations) {
            setSelectedCities(query?.locations ? JSON.parse(`${query?.locations}`) : []);
        }
        if (query?.typeFish) {
            setTypeFish(query?.typeFish ? JSON.parse(`${query?.typeFish}`) : []);
        }
        if (query?.rating) {
            setRatings(query?.rating ? JSON.parse(`${query?.rating}`) : []);
        }
        if (query?.experience) {
            setExperience(query?.experience ? JSON.parse(`${query?.experience}`) : []);
        }
        if (query?.price) {
            setPriceRange(query?.price ? JSON.parse(`${query?.price}`) : []);
        }
    }, [query]);

    const queryAddress = `/services?locations=${JSON.stringify(selectedCities)}&typeFish=${JSON.stringify(
        typeFish)}&rating=${JSON.stringify(ratings)}&userExperience=${JSON.stringify(experience)}
    `;

    useEffect(() => {
        if (selectedCities?.length) {
            router.push(queryAddress, undefined, { scroll: false });
        }
    }, [queryAddress]);

    const handlePriceClear = () => {
        setPriceRange([0, 1000]);
    }


    return (
        <div className={styles['categories-container']}>
            <Location
                selectedCities={selectedCities}
                setSelectedCities={setSelectedCities}
            />
            <PriceSlider
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                handlePriceClear={handlePriceClear}
            />
            <TypeFish
                typeFish={typeFish}
                setTypeFish={setTypeFish}
            />
            <UserRating
                ratings={ratings}
                setRatings={setRatings}
            />
            <Experience
                experience={experience}
                setExperience={setExperience}
            />
        </div >
    );
};

export default Categories;