import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar"
import Carousel from "./CarousleOficina/Carousel"
import {AmenitiesOficina} from "./AmenitiesOficina/AmenitiesOficina"
import MapaOficina from "./MapaOficina/MapsOficina"
import {Footer} from "../Footer/Footer"
import {SearchHeader} from "../LandingPageComponents/Headers/SearchHeader"

export const DetalleCardOficina = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <Carousel/>
            <AmenitiesOficina/>
            <MapaOficina/> 
            {/* <Comments/> */}
            <Footer/>

        </>
    )
}
