import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {Marker, Popup,GeolocateControl} from 'react-map-gl';

function MapsOficina() {
  const [viewport, setViewport] = useState({
    width: "1000px",
    height: 320,
    latitude: -34.60373394696125,
    longitude: -58.381635006505434,
    zoom: 13
  });
  const [showPopup, togglePopup] = React.useState(false);
  const geolocateControlStyle= {
    right: 10,
    top: 10
  };
  
  return (
    <div className="App" style={{marginLeft: "5%", marginBottom: "5%"}}>
       <ReactMapGL
      {...viewport}
      mapboxApiAccessToken ={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/francobenito/ckv4mcl1r4aje14piaqjuz6yn"
      >
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto={false}
      /> 
    </ReactMapGL>
    </div>
  );
}

export default MapsOficina;