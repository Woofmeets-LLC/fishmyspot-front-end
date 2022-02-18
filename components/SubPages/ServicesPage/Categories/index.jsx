import React, { useEffect, useState } from 'react';
import PriceSlider from '../PriceSlider';
import Location from '../Location';
import TypeFish from '../TypeFish';
import UserRating from '../UserRating';
import Experience from '../Experience';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import styles from './Categories.module.css';

const Categories = () => {
    const router = useRouter();
    const [firstTime, setFirstTime] = useState(true)

    const [query, setQuery] = useState({ location: [], typeFish: [], rating: [], experience: [], price: [0, 1000] });

    useEffect(() => {
        if (!firstTime) router.push('/services?' + queryString.stringify(query, { arrayFormat: 'comma', skipNull: true }));

    }, [query]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.search) {
            const parsed = queryString.parse(window.location.search, { arrayFomate: 'comma' })
            for (const p in parsed) {
                parsed[p] = parsed[p].split(',')
            }
            const parsedQuery = { ...query, ...parsed }
            setQuery((prevState) => {
                return {
                    ...parsedQuery
                }
            })
            router.push('/services?' + queryString.stringify(parsedQuery, { arrayFormat: 'comma', skipNull: true }));
            setFirstTime(false)

        }
    }, [])


    const handlePriceClear = () => {
        setQuery({ ...query, price: [0, 1000] })
    }


    return (
        <div className={styles['categories-container']}>
            <Location
                selectedCities={query.location}
                setSelectedCities={setQuery}
            />
            <PriceSlider
                priceRange={query.price}
                setPriceRange={setQuery}
                handlePriceClear={handlePriceClear}
            />
            <TypeFish
                typeFish={query.typeFish}
                setTypeFish={setQuery}
            />
            <UserRating
                ratings={query.rating}
                setRatings={setQuery}
            />
            <Experience
                experience={query.experience}
                setExperience={setQuery}
            />
        </div >
    );
};

export default Categories;