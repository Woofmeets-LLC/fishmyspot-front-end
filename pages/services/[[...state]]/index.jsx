/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import * as sharetribeSdk from 'sharetribe-flex-sdk';
import {useRouter} from "next/router";
import SubServices from '../../../components/SubPages/ServicesPage/SubServicesList';
import HomeLayout from '../../../layouts/HomeLayout';
import { getSdk } from '../../../sharetribe/sharetribeSDK';
import slugify from "slugify";
import Categories from '../../../components/SubPages/ServicesPage/Categories';
const { types } = sharetribeSdk;

const states = {
  "alabama": "AL",
  "alaska": "AK",
  "arizona": "AZ",
  "arkansas": "AR",
  "california": "CA",
  "colorado": "CO",
  "connecticut": "CT",
  "delaware": "DE",
  "florida": "FL",
  "georgia": "GA",
  "hawaii": "HI",
  "idaho": "ID",
  "illinois": "IL",
  "indiana": "IN",
  "iowa": "IA",
  "kansas": "KS",
  "kentucky": "KY",
  "louisiana": "LA",
  "maine": "ME",
  "maryland": "MD",
  "massachusetts": "MA",
  "michigan": "MI",
  "minnesota": "MN",
  "mississippi": "MS",
  "missouri": "MO",
  "montana": "MT",
  "nebraska": "NE",
  "nevada": "NV",
  "new-hampshire": "NH",
  "new-jersey": "NJ",
  "new-mexico": "NM",
  "new-york": "NY",
  "north-carolina": "NC",
  "north-dakota": "ND",
  "ohio": "OH",
  "oklahoma": "OK",
  "oregon": "OR",
  "pennsylvania": "PA",
  "rhode-island": "RI",
  "south-carolina": "SC",
  "south-dakota": "SD",
  "tennessee": "TN",
  "texas": "TX",
  "utah": "UT",
  "vermont": "VT",
  "virginia": "VA",
  "washington": "WA",
  "west virginia": "WV",
  "wisconsin": "WI",
  "wyoming": "WY"
}

const ServicesByState = () => {
  const [images, setImages] = useState({})
  const [query, setQuery] = useState({ location: '', typeFish: [], rating: [], experience: [], price: [0, 1000] });
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState([])

  const router = useRouter();
  const {state} = router.query;

  const getData = (page, newData) => {
    if (newData) {
      setData([]);
    }
    const q = {
      pub_halfDay: `${query.price[0]},${query.price[1]}`,
      perPage: 10,
      page: page,
      include: ['images']
    }

    if (state?.[0]) {
      q.pub_state = states[slugify(state[0]).toLowerCase()];
    }

    if (query.typeFish.length) {
      q.pub_fishes = `has_any:${query.typeFish.join(',')}`
    }

    if (query.experience.length) {
      q.pub_experiences = `has_any:${query.experience.join(',')}`
    }

    if (query.location) {
      const [lat, lng] = query.location.split(":");
      q.origin = new types.LatLng(parseFloat(lat), parseFloat(lng))
      // q.bounds = boundsCalculator(1000, parseFloat(lat), parseFloat(lng))
    }
    if (query.rating.length) {
      const ratingOptions = {
        'One star': 1,
        'Two star': 2,
        'Three star': 3,
        'Four star': 4,
        'Five star': 5
      };
      const rating = query.rating.map(r => ratingOptions[r]);
      let min, max;
      if (rating.length > 1) {
        min = Math.min(...rating);
        max = Math.max(...rating);
      } else {
        min = Math.min(...rating);
        max = min + 1;
      }
      q.pub_rating = `${min},${max}`;

      // q.bounds = boundsCalculator(1000, parseFloat(lat), parseFloat(lng))
    }
    
    if (router.isReady) {
      getSdk().listings.query(q)
      .then(res => {

        if (res.data.meta.totalItems) {
          res.data.included.filter(d => {
            return d.type == 'image'
          }).forEach(m => {
            setImages(prevState => ({ ...prevState, [m.id.uuid]: m.attributes }))
          })
          setCurrentPage(page)
          const newDataSet = newData ? [...res.data.data] : [...data, ...res.data.data]
          setData(newDataSet)
          setHasMore(res.data.meta.totalItems === newDataSet.length ? false : true)
        } else {
          setCurrentPage(1)
          setHasMore(false)
        }

      })
      .catch(err => {
        setData([])
      })
    }
  }

  useEffect(() => {
    getData(1, true)
  }, [query])



  return (
    <HomeLayout>
      <section className="bg-[#fbfbfb]">
        <div className="container">
          <Categories
            getQuery={q => setQuery(q)}
            state={state}
          />
          <SubServices
            fetchData={() => {
              getData(currentPage + 1)
            }}
            hasMore={hasMore}
            items={data}
            images={images}
          />
        </div>
      </section>
    </HomeLayout>

  );
};

export default ServicesByState;
