import React from 'react'
import ReactMapGL from 'react-map-gl';

function Map() {

    const [viewport, setViewport] = useState({
        width:'100%',
        height:'100%',
        latitude: -34.60373394696125,
        longitude: -58.381635006505434,
        zoom: 13
      });

    return<ReactMapGL
    mapStyle='mapbox://styles/francobenito/ckv4mcl1r4aje14piaqjuz6yn'
    mapboxApiAccessToken={pk.eyJ1IjoiZnJhbmNvYmVuaXRvIiwiYSI6ImNrdjRsNTlzMTNmcHMzMnA2MDdvMGQ0MXcifQ.dO5yf2FuB3B4VCsEt91wMg}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >

    </ReactMapGL>
}

export default Map
