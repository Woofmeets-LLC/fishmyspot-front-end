/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../../../../store/slices/autocompletetionSlice';
import Experience from '../Experience';
import Location from '../Location';
import PriceSlider from '../PriceSlider';
import TypeFish from '../TypeFish';
import UserRating from '../UserRating';

const Categories = ({ getQuery, state }) => {
  const { isFirst, latLng } = useSelector((state) => state.place);
  const router = useRouter();
  const dispatch = useDispatch();
  const [firstTime, setFirstTime] = useState(true);
  const [isQueryReady, setIsQueryReady] = useState(false);

  const [query, setQuery] = useState({
    location: '',
    typeFish: [],
    rating: [],
    experience: [],
    price: [0, 1000],
    mile: 250,
  });

  useEffect(() => {
    if (!firstTime && isQueryReady) {
      if (state) {
        router.push(
          `/services/${state}?` +
            queryString.stringify(query, {
              arrayFormat: 'comma',
              skipNull: true,
            })
        );
      } else {
        router.push(
          `/services?` +
            queryString.stringify(query, {
              arrayFormat: 'comma',
              skipNull: true,
            })
        );
      }
    }
    getQuery(query);
  }, [query]);

  useEffect(() => {
    if (!isFirst) {
      setQuery({ ...query, location: latLng });
    }
  }, [latLng]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      console.log('executing inside location search');
      const parsed = queryString.parse(window.location.search, {
        arrayFomate: 'comma',
      });
      for (const p in parsed) {
        if (p === 'location') {
          parsed[p] = parsed[p];
        } else {
          parsed[p] = parsed[p].split(',');
        }
      }
      const parsedQuery = { ...query, ...parsed };

      setQuery((prevState) => {
        return {
          ...parsedQuery,
        };
      });

      setIsQueryReady(true);
      getQuery(parsedQuery);
    }
    setFirstTime(false);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const parsed = queryString.parse(window.location.search, {
        arrayFomate: 'comma',
      });
      // navigator.geolocation.getCurrentPosition(
      //   ({ coords: { latitude: lat, longitude: lng } }) => {
      //     setQuery({ ...query, location: `${lat}:${lng}` });
      //   }
      // );

      if (parsed?.location) {
        dispatch(
          set({
            isFirst: false,
            latLng: parsed?.location,
          })
        );
      }
    }
  }, []);

  const handlePriceClear = () => {
    setQuery({ ...query, price: [0, 1000] });
  };
  const handleMileClear = () => {
    setQuery({ ...query, mile: 250, isBoundChanged: false });
  };

  return (
    <div
      className={`grid grid-cols-2 gap-4 py-6 md:pt-5 md:pb-10 xl:pt-16 xl:pb-14 ${
        router?.query?.state?.[0]
          ? 'sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:ml-14 xl:grid-cols-4'
          : 'sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-7 3xl:grid-cols-8'
      }`}
    >
      {!router?.query?.state?.[0] && query?.location && (
        <Location
          // selectedCities={query.location}
          // setSelectedCities={setQuery}
          mileRange={query.mile}
          setMileRange={setQuery}
          handleMileClear={handleMileClear}
          setIsQueryReady={setIsQueryReady}
        />
      )}
      <PriceSlider
        priceRange={query.price}
        setPriceRange={setQuery}
        handlePriceClear={handlePriceClear}
        setIsQueryReady={setIsQueryReady}
      />
      <TypeFish
        typeFish={query.typeFish}
        setTypeFish={setQuery}
        setIsQueryReady={setIsQueryReady}
      />
      <UserRating
        ratings={query.rating}
        setRatings={setQuery}
        setIsQueryReady={setIsQueryReady}
      />
      <Experience
        experience={query.experience}
        setExperience={setQuery}
        setIsQueryReady={setIsQueryReady}
      />
    </div>
  );
};

export default Categories;
