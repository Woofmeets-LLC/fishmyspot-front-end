/* eslint-disable react-hooks/exhaustive-deps */
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as sharetribeSdk from 'sharetribe-flex-sdk';
import slugify from 'slugify';
import Categories from '../../../components/SubPages/ServicesPage/Categories';
import SubServicesBannerSection from '../../../components/SubPages/ServicesPage/SubServicesBannerSection';
import SubServices from '../../../components/SubPages/ServicesPage/SubServicesList';
import HomeLayout from '../../../layouts/HomeLayout';
import { getSdk } from '../../../sharetribe/sharetribeSDK';

const { types } = sharetribeSdk;

const states = {
  alabama: 'AL',
  alaska: 'AK',
  arizona: 'AZ',
  arkansas: 'AR',
  california: 'CA',
  colorado: 'CO',
  connecticut: 'CT',
  delaware: 'DE',
  'district-of-columbia': 'DC',
  florida: 'FL',
  georgia: 'GA',
  hawaii: 'HI',
  idaho: 'ID',
  illinois: 'IL',
  indiana: 'IN',
  iowa: 'IA',
  kansas: 'KS',
  kentucky: 'KY',
  louisiana: 'LA',
  maine: 'ME',
  maryland: 'MD',
  massachusetts: 'MA',
  michigan: 'MI',
  minnesota: 'MN',
  mississippi: 'MS',
  missouri: 'MO',
  montana: 'MT',
  nebraska: 'NE',
  nevada: 'NV',
  'new-hampshire': 'NH',
  'new-jersey': 'NJ',
  'new-mexico': 'NM',
  'new-york': 'NY',
  'north-carolina': 'NC',
  'north-dakota': 'ND',
  ohio: 'OH',
  oklahoma: 'OK',
  oregon: 'OR',
  pennsylvania: 'PA',
  'rhode-island': 'RI',
  'south-carolina': 'SC',
  'south-dakota': 'SD',
  tennessee: 'TN',
  texas: 'TX',
  utah: 'UT',
  vermont: 'VT',
  virginia: 'VA',
  washington: 'DC',
  'west-virginia': 'WV',
  wisconsin: 'WI',
  wyoming: 'WY',
};

const computeOffset = (from, distance, heading) => {
  distance /= 6378100;
  heading = heading * (Math.PI / 180);
  const fromLat = from.latitude * (Math.PI / 180);
  const fromLng = from.longitude * (Math.PI / 180);
  const cosDistance = Math.cos(distance);
  const sinDistance = Math.sin(distance);
  const sinFromLat = Math.sin(fromLat);
  const cosFromLat = Math.cos(fromLat);
  const sinLat =
    cosDistance * sinFromLat + sinDistance * cosFromLat * Math.cos(heading);
  const dLng = Math.atan2(
    sinDistance * cosFromLat * Math.sin(heading),
    cosDistance - sinFromLat * sinLat
  );
  return `${(Math.asin(sinLat) * 180) / Math.PI},${
    ((fromLng + dLng) * 180) / Math.PI
  }`;
};

const toBounds = (center, radiusInMiles) => {
  const radiusInMeters = radiusInMiles * 1609;
  const distanceFromCenterToCorner = radiusInMeters * Math.sqrt(2.0);
  const southwestCorner = computeOffset(
    center,
    distanceFromCenterToCorner,
    225.0
  );
  const northeastCorner = computeOffset(
    center,
    distanceFromCenterToCorner,
    45.0
  );
  return `${northeastCorner},${southwestCorner}`;
};

const ServicesByState = () => {
  const [images, setImages] = useState({});
  const [query, setQuery] = useState({
    location: '',
    typeFish: [],
    rating: [],
    experience: [],
    price: [0, 1000],
    mile: 20,
    isBoundChanged: false,
  });
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const router = useRouter();
  const { state } = router.query;
  const { isFirst, latLng } = useSelector((state) => state.place);

  const getData = (page, newData) => {
    if (newData) {
      setData([]);
    }
    const q = {
      pub_halfDay: `${query.price[0]},${query.price[1]}`,
      perPage: 10,
      page: page,
      include: ['images'],
    };

    if (state?.[0]) {
      q.pub_state = states[slugify(state[0]).toLowerCase()];
    }

    if (query.typeFish.length) {
      q.pub_fishes = `has_any:${query.typeFish.join(',')}`;
    }

    if (query.experience.length) {
      q.pub_experiences = `has_any:${query.experience.join(',')}`;
    }
    if (latLng) {
      const [lat, lng] = latLng.split(':');
      q.origin = new types.LatLng(parseFloat(lat), parseFloat(lng));
      // q.bounds = boundsCalculator(1000, parseFloat(lat), parseFloat(lng))
      if (!state?.[0] && query?.isBoundChanged) {
        q.bounds = toBounds({ latitude: lat, longitude: lng }, query.mile);
      }
    }
    if (query.rating.length) {
      const ratingOptions = {
        'One star': 1,
        'Two star': 2,
        'Three star': 3,
        'Four star': 4,
        'Five star': 5,
      };
      const rating = query.rating.map((r) => ratingOptions[r]);
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
      getSdk()
        .listings.query(q)
        .then((res) => {
          if (res.data.meta.totalItems) {
            res.data.included
              .filter((d) => {
                return d.type == 'image';
              })
              .forEach((m) => {
                setImages((prevState) => ({
                  ...prevState,
                  [m.id.uuid]: m.attributes,
                }));
              });
            setCurrentPage(page);
            const newDataSet = newData
              ? [...res.data.data]
              : [...data, ...res.data.data];
            setData(newDataSet);
            setHasMore(
              res.data.meta.totalItems === newDataSet.length ? false : true
            );
          } else {
            setCurrentPage(1);
            setHasMore(false);
          }
        })
        .catch((err) => {
          setData([]);
        });
    }
  };

  useEffect(() => {
    getData(1, true);
  }, [query]);

  if (state?.[0] && states[state?.[0]] === undefined)
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );

  return (
    <HomeLayout>
      {state?.[0] && (
        <SubServicesBannerSection
          state={state?.[0]
            .split('-')
            .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
            .join(' ')}
        />
      )}
      <section className="bg-[#fbfbfb]">
        <div className="container min-h-screen">
          <div className="mt-5 items-center xl:mt-0 xl:flex">
            {state?.length > 0 && (
              <h2 className="font-food-truck text-2xl uppercase text-primary md:text-3xl 2xl:text-4xl 3xl:text-5xl">
                Fishmyspot{' '}
                {state?.[0]
                  .split('-')
                  .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
                  .join(' ')}
              </h2>
            )}
            <Categories getQuery={(q) => setQuery(q)} state={state} />
          </div>
          <SubServices
            fetchData={() => {
              getData(currentPage + 1);
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
