import React from "react";
import { useEffect } from "react";
import Axios from 'axios'

function DetalleCardOficina(){

    return(
        <>
            <Navbar/>
            <div className = "Titulos">
                <h1></h1>
                <div className ="Direccion">
                <h3></h3>
                </div>
            </div>
            <Carousel/>
            <AmenitiesOficina/>
            <MapaOficina/>
            <Comments/>
            <Footer/>

        </>
    )
}