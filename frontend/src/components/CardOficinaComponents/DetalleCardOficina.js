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
import { useHistory } from "react-router";

export const DetalleCardOficina = () => {
    const history = useHistory();
    const data = history.location.state;

    const handleChangeLlegada = (newValue) => {
        setValueLlegada(newValue);
    };

    const handleChangeSalida = (newValue) => {
        setValueSalida(newValue);
    }

    const [valueLlegada, setValueLlegada] = useState(data.llegada);
    const [valueSalida, setValueSalida] = useState(data.salida);
    const [miembros, setMiembros] = useState(0);
    const [oficina, setOficina] = useState("Cualquiera");
    const handleChangeDropdownMiembros = (miembros, oficina) => {
        setMiembros(miembros);
        setOficina(oficina);
    }

    return (
        <>
            <Navbar/>
            <SearchHeader/>
            <div className="titulo-detalle">
                <h1>{`${data.datos.nombre} - ${data.datos.tipo} `}</h1>
                <h5 style={{display: "flex", alignItems: "center"}}><GrLocation/>{data.datos.direccion}</h5>
            </div>
            <div className="container-carrusel-detalle">
                <Carousel className="carrusel-detalle"/>
                <div className="boton-reserva-detalle">
                    <FechasDetalle handleChangeLlegada={(newValue) => handleChangeLlegada(newValue)}
                                   valueLlegada={valueLlegada}
                                   handleChangeSalida={(newValue) => handleChangeSalida(newValue)}
                                   valueSalida={valueSalida}/>
                    <DropdwOffice miembros={data.miembros} oficina={data.datos.tipo} handleChange={handleChangeDropdownMiembros}/>
                    <p className="precio"> ${data.datos.precio}</p>
                    <button className="boton-reserva-detalle-cowork">Reservar</button>
                </div>
            </div>

            <div className="amenities-detalle">
                <h5>Amenities</h5>
                <p>Top 5 amenities</p>
            </div>
            <AmenitiesOficina amenitites={data.datos.amenities}/>
            <div className="container-mapa-detalles mapa">
                <div className="amenities-detalle">
                    <h5>Direccion</h5>
                    <p>{data.datos.direccion}</p>
                </div>
                <MapaOficina/>
            </div>
            {/* <Comments/> */}
            <Footer/>

        </>
    )
}
