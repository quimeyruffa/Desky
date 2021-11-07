import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

const MapaCard
  const [viewport, setViewport] = useState({
    width: 1200,
    height: 800,
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
      mapboxApiAccessToken ={pk.eyJ1IjoiZnJhbmNvYmVuaXRvIiwiYSI6ImNrdjRsNTlzMTNmcHMzMnA2MDdvMGQ0MXcifQ.dO5yf2FuB3B4VCsEt91wMg}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/francobenito/ckv4mcl1r4aje14piaqjuz6yn"
      > 
     <Marker 
      latitude={-34.60348238969773}
      longitude={-58.37791340765063} 
      offsetLeft={-20} 
      offsetTop={-10}
      ><Room style={{fontSize:viewport.zoom*2, color:"slateblue"}}/>
      </Marker>
    );
export default MapaCard;