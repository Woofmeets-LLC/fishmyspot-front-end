import React from 'react';
import {
  Circle,
  GoogleMap,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import { compose, withProps } from 'recompose';

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ pondData }) => {
  return (
    <React.StrictMode>
      <GoogleMap
        options={{
          disableDefaultUI: true,
          zoomControl: false,
        }}
        defaultZoom={15.3}
        defaultCenter={{
          lat: pondData?.attributes?.geolocation?.lat || 0,
          lng: pondData?.attributes?.geolocation?.lng,
        }}
      >
        <Circle
          center={{
            lat: pondData?.attributes?.geolocation?.lat || 0,
            lng: pondData?.attributes?.geolocation?.lng,
          }}
          radius={60} // Adjust the radius value as needed (in meters)
          options={{
            fillColor: 'rgb(248 113 113)',
            fillOpacity: 0.35,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    </React.StrictMode>
  );
});

class ListingGoogleMap extends React.PureComponent {
  render() {
    return (
      <>
        <h2 className="mb-1 text-lg font-semibold text-primary md:text-xl xl:text-2xl">
          Location:
        </h2>
        <MyMapComponent pondData={this.props?.pondData} />
      </>
    );
  }
}

export default ListingGoogleMap;
