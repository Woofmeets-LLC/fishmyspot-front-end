import { AiOutlineSearch } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import Autocomplete from 'react-google-autocomplete';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { set } from '../../../store/slices/autocompletetionSlice';

const SearchBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const getAddress = (place) => {
    dispatch(
      set({
        isFirst: false,
        latLng: `${place.geometry.location.lat()}:${place.geometry.location.lng()}`,
      })
    ); // router.pathname !== "/services"
    router.push(
      `/services?location=${place.geometry.location.lat()}%3A${place.geometry.location.lng()}&price=0,1000`
    );
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        dispatch(
          set({
            isFirst: false,
            latLng: `${lat}:${lng}`,
          })
        ); // router.pathname !== "/services"
        router.push(`/services?location=${lat}%3A${lng}&price=0,1000`);
      }
    );
  };
  return (
    <div className="flex h-8 w-full rounded border xl:h-[35px] 2xl:h-[42px] 3xl:h-[47px]">
      <span className="flex h-full w-8 items-center justify-center px-2 2xl:w-10">
        <AiOutlineSearch className="text-primary xl:text-xl 2xl:text-2xl" />
      </span>
      <Autocomplete
        placeholder={'Search...'}
        className="block w-full appearance-none border-none bg-transparent p-1 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        apiKey={process.env.GOOGLE_MAP_API_KEY}
        onPlaceSelected={(place) => {
          getAddress(place);
        }}
        options={{
          types: [],
        }}
      />
      <span
        title="Search by your location"
        className="flex h-full w-8 cursor-pointer items-center justify-center border-l px-2 2xl:w-10"
        onClick={getCurrentLocation}
      >
        <BiCurrentLocation className="text-primary xl:text-xl 2xl:text-2xl" />
      </span>
    </div>
  );
};

export default SearchBar;
