/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Experience from '../Experience';
import Location from '../Location';
import PriceSlider from '../PriceSlider';
import TypeFish from '../TypeFish';
import UserRating from '../UserRating';


const Categories = ({ getQuery, state }) => {
    const { isFirst, latLng } = useSelector(state => state.place);
    const router = useRouter();
    const [firstTime, setFirstTime] = useState(true)

    const [query, setQuery] = useState({ location: '', typeFish: [], rating: [], experience: [], price: [0, 1000] });

    useEffect(() => {
        if (!firstTime) {
          if (state) {
            router.push(`/services/${state}?` + queryString.stringify(query, {
              arrayFormat: 'comma',
              skipNull: true
            }));
          }
          else {
            router.push(`/services?` + queryString.stringify(query, {
              arrayFormat: 'comma',
              skipNull: true
            }));
          }
        }
        getQuery(query)

    }, [query]);
    useEffect(() => {
        if (!isFirst) {
            setQuery({ ...query, location: latLng })
        }
    }, [latLng])

    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.search) {
            const parsed = queryString.parse(window.location.search, { arrayFomate: 'comma' })
            for (const p in parsed) {
                if (p === 'location') {
                    parsed[p] = parsed[p];
                } else {
                    parsed[p] = parsed[p].split(',');
                }
            }
            const parsedQuery = { ...query, ...parsed }
            setQuery((prevState) => {
                return {
                    ...parsedQuery
                }
            })
            if (state) {
              router.push(`/services/${state}?` + queryString.stringify(parsedQuery, { arrayFormat: 'comma', skipNull: true }));
            }
            else {
              router.push(`/services?` + queryString.stringify(parsedQuery, { arrayFormat: 'comma', skipNull: true }));
            }

        }
        setFirstTime(false)

    }, [])


    const handlePriceClear = () => {
        setQuery({ ...query, price: [0, 1000] });
    }


    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7 3xl:grid-cols-8 gap-4 py-6 md:py-10 xl:pt-16 xl:pb-14">
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
        </div>
    );
};

export default Categories;