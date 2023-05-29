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
)((props) => (
  <GoogleMap
    options={{
      disableDefaultUI: true,
      zoomControl: false,
    }}
    defaultZoom={14}
    defaultCenter={{ lat: 23.810331, lng: 90.412521 }}
  >
    <Circle
      center={{ lat: 23.810331, lng: 90.412521 }}
      radius={500} // Adjust the radius value as needed (in meters)
      options={{
        fillColor: 'rgb(248 113 113)',
        fillOpacity: 0.35,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
      }}
    />
  </GoogleMap>
));

class ListingGoogleMap extends React.PureComponent {
  render() {
    return <MyMapComponent />;
  }
}

export default ListingGoogleMap;
