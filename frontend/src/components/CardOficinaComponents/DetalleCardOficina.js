import React, {useState} from "react";
import {useEffect} from "react";
import Navbar from "../Navbar/Navbar"
import Carousel from "./CarousleOficina/Carousel"
import {AmenitiesOficina} from "./AmenitiesOficina/AmenitiesOficina"
import MapaOficina from "./MapaOficina/MapsOficina"
import {Footer} from "../Footer/Footer"
import {SearchHeader} from "../Headers/SearchHeader"
import './DetalleCardOficina.css'
import {GrLocation} from "react-icons/all";
import {DropdwOffice} from "../SearchComponents/DropdwOffice/DropdwOffice";
import {FechasDetalle} from "./FechasDetalle/FechasDetalle";

export const DetalleCardOficina = () => {

    const handleChangeLlegada = (newValue) => {
        setValueLlegada(newValue);
    };

    const handleChangeSalida = (newValue) => {
        setValueSalida(newValue);
    }

    const [valueLlegada, setValueLlegada] = useState(new Date());
    const [valueSalida, setValueSalida] = useState(new Date());

    return (
        <>
            <Navbar/>
            <SearchHeader/>
            <div className="titulo-detalle">
                <h1>WeWork</h1>
                <h5 style={{display: "flex", alignItems: "center"}}><GrLocation/>Thames 1919, Palermo</h5>
            </div>
            <div className="container-carrusel-detalle">
                <Carousel className="carrusel-detalle"/>
                <div className="boton-reserva-detalle">
                    <FechasDetalle handleChangeLlegada={(newValue) => handleChangeLlegada(newValue)}
                                   valueLlegada={valueLlegada}
                                   handleChangeSalida={(newValue) => handleChangeSalida(newValue)}
                                   valueSalida={valueSalida}/>
                    <DropdwOffice/>
                    <p className="precio">$16.000</p>
                    <button className="boton-reserva-detalle-cowork">Reservar</button>
                </div>
            </div>

            <div className="amenities-detalle">
                <h5>Amenities</h5>
                <p>Top 5 amenities</p>
            </div>
            <AmenitiesOficina amenitites={["petfriendly", "podcast", "kitchen", "parking", "dining"]}/>
            <div className="container-mapa-detalles mapa">
                <div className="amenities-detalle">
                    <h5>Direccion</h5>
                    <p>Thames 1919, Palermo</p>
                </div>
                <MapaOficina/>
            </div>
            {/* <Comments/> */}
            <Footer/>

        </>
    )
}
