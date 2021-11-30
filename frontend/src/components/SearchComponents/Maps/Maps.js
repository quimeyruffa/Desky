import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {Marker, Popup,GeolocateControl} from 'react-map-gl';

function Maps() {
  const [viewport, setViewport] = useState({
    width: 800 ,
    height: 700,
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
    <div className="App">
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
      <Marker
        latitude ={-34.558540259593336}
        longitude={-58.444657268667775}
        offsetLeft={-20}
        offsetTop={-10}
        >
        <Room />
      </Marker>
      <Marker
        latitude ={-34.5684832526266}
        longitude={-58.43713412533767}
        offsetLeft={-20}
        offsetTop={-10}
        >
        <Room />
      </Marker>
      <Marker
        latitude ={-34.60367162058654}
        longitude={-58.37812301108116}
        offsetLeft={-20}
        offsetTop={-10}
        >
        <Room />
      </Marker>
      <Marker
        latitude ={-34.59623567345648}
        longitude={-58.37143705708483}
        offsetLeft={-20}
        offsetTop={-10}
        >
        <Room />
      </Marker>
      <Marker
        latitude ={-34.60056309649853}
        longitude={-58.38850624035823}
        offsetLeft={-20}
        offsetTop={-10}
        >
        <Room />
      </Marker>
      <Marker
        latitude ={-34.586481394451305}
        longitude={-58.427323310215506}
        offsetLeft={-20}
        offsetTop={-10}
        >
        <Room />
      </Marker>
      </ReactMapGL>
    </div>
  );
}

export default Maps;