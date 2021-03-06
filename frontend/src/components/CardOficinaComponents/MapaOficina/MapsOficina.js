import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {Marker, Popup,GeolocateControl} from 'react-map-gl';
import {Room} from "@mui/icons-material"

function MapsOficina() {
  const [viewport, setViewport] = useState({
    width: "1000px",
    height: 320,
    latitude: -34.558540259593336,
    longitude: -58.444657268667775,
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
      <Marker
        latitude ={-34.558540259593336}
        longitude={-58.444657268667775}
        offsetLeft={-20}
        offsetTop={-10}
        >
        <Room />
      </Marker>
    </ReactMapGL>
    </div>
  );
}

export default MapsOficina;