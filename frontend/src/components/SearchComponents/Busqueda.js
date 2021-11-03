import {SearchCard} from "./SearchCard/SearchCard";
import Slider from "./Slider/Slider";
import React, {useState} from "react";
import {SearchBar} from "./SearchBar/Searchbar";
import './busqueda.css'
import {Link} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {Footer} from "../Footer/Footer";
import {SearchHeader} from "../Headers/SearchHeader";
import {OrderBy} from "./OrderBy/OrderBy"
import { DropdwAmenities } from "./DropdwAmenities/DropdwAmenities";
import {DropdwOffice} from "./DropdwOffice/DropdwOffice";

export const Busqueda = () => {
    
    const [datos, setDatos] = useState([
        {
            "_id": "001",
            "nombre": "weWork",
            "email": "weworka@gmail.com",
            "resena": [
                {
                    "_id": "61732c0d7ee335f8f6c7c8a1",
                    "puntaje": 4,
                    "nombre": "julio",
                    "texto": "blablabla",
                    "fecha": "2021-10-14T00:00:00.000Z"
                }
            ],
            "direccion": {
                "_id": "61732c0d7ee335f8f6c7c8a2",
                "streetAddress": "126 Udhna",
                "city": "san jone",
                "state": "CA",
                "postalCode": "394221",
                "Coordinate": "-34.617363885768896, -58.38180343127131"
            },
            "promedioPuntos": 3.2,
            "tipo": [
                {
                    "_id": "61732c0d7ee335f8f6c7c8a3",
                    "type": "openOffice",
                    "precio": 10000,
                    "fechaIni": "2021-10-14T00:00:00.000Z",
                    "fechaFin": "2021-10-14T00:00:00.000Z",
                    "cantPersonas": 3,
                    "diferencial": [
                        "parking",
                        "petFriendly",
                        "podcast"
                    ],
                    "reserva": [
                        {
                            "_id": "61732c0d7ee335f8f6c7c8a4",
                            "idUsuario": "001"
                        }
                    ]
                }
            ]
        },
        {
            "_id": "002",
            "nombre": "HIT Cowork",
            "email": "hitcowork@gmail.com",
            "resena": [
                {
                    "_id": "61732c0d7ee335f8f6c7c8a5",
                    "puntaje": 3.5,
                    "nombre": "Carlos",
                    "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget faucibus justo, at semper odio. Phasellus quis ipsum augue. Sed rutrum, felis eu varius mattis,",
                    "fecha": "2021-10-14T00:00:00.000Z"
                },
                {
                    "_id": "61732c0d7ee335f8f6c7c8a6",
                    "puntaje": 3.5,
                    "nombre": "Carlos",
                    "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget faucibus justo, at semper odio. Phasellus quis ipsum augue. Sed rutrum, felis eu varius mattis,",
                    "fecha": "2021-10-14T00:00:00.000Z"
                }
            ],
            "direccion": {
                "_id": "61732c0d7ee335f8f6c7c8a7",
                "streetAddress": "1391 La Pampa",
                "city": "CABA",
                "state": "Buenos Aires",
                "postalCode": "C1428DZA",
                "Coordinate": "-34.55855263802333, -58.44414754399354"
            },
            "promedioPuntos": 3.5,
            "tipo": [
                {
                    "_id": "61732c0d7ee335f8f6c7c8a8",
                    "type": "openOffice",
                    "precio": 20000,
                    "fechaIni": "2021-10-14T00:00:00.000Z",
                    "fechaFin": "2021-10-14T00:00:00.000Z",
                    "cantPersonas": 30,
                    "diferencial": [
                        "petFriendly",
                        "kitchen",
                        "parking"
                    ],
                    "reserva": [
                        {
                            "_id": "61732c0d7ee335f8f6c7c8a9",
                            "idUsuario": "001"
                        }
                    ]
                },
                {
                    "_id": "61732c0d7ee335f8f6c7c8aa",
                    "reserva": [],
                    "type": "privateOffice",
                    "precio": 11000,
                    "fechaIni": "2021-10-14T00:00:00.000Z",
                    "fechaFin": "2021-10-14T00:00:00.000Z",
                    "cantPersonas": 30,
                    "diferencial": [
                        "dining"
                    ]
                }
            ]
        },
        {
            "_id": "003",
            "nombre": "LA COMU Cowork",
            "email": "lacomucowork@gmail.com",
            "resena": [
                {
                    "_id": "61732c0d7ee335f8f6c7c8ab",
                    "puntaje": 3.5,
                    "nombre": "Carlos",
                    "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget faucibus justo, at semper odio. Phasellus quis ipsum augue. Sed rutrum, felis eu varius mattis,",
                    "fecha": "2021-10-14T00:00:00.000Z"
                },
                {
                    "_id": "61732c0d7ee335f8f6c7c8ac",
                    "puntaje": 5,
                    "nombre": "Enriqueta",
                    "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget faucibus justo, at semper odio. Phasellus quis ipsum augue. Sed rutrum, felis eu varius mattis,",
                    "fecha": "2021-10-14T00:00:00.000Z"
                }
            ],
            "direccion": {
                "_id": "61732c0d7ee335f8f6c7c8ad",
                "streetAddress": "2240 San Lorenzo",
                "city": "PBA",
                "state": "Buenos Aires",
                "postalCode": "B1636BVP",
                "Coordinate": "-34.50716172844765, -58.5015953920664"
            },
            "promedioPuntos": 4.25,
            "tipo": [
                {
                    "_id": "61732c0d7ee335f8f6c7c8ae",
                    "type": "openOffice",
                    "precio": 7000,
                    "fechaIni": "2021-10-14T00:00:00.000Z",
                    "fechaFin": "2021-10-14T00:00:00.000Z",
                    "cantPersonas": 30,
                    "diferencial": [
                        "parking",
                        "coffee"
                    ],
                    "reserva": [
                        {
                            "_id": "61732c0d7ee335f8f6c7c8af",
                            "idUsuario": "001"
                        }
                    ]
                }
            ]
        }
    ]);
    
    // const handleChangeFiltro = (event) => {
    //     if (event.target.value !== "nada") {
    //
    //         let copia = datos.slice();
    //
    //         copia.sort((a, b) => {
    //             let maxA = 0;
    //             let maxB = 0;
    //
    //             for (const elem of a.tipo) {
    //                 maxA = (elem.precio > maxA) ? elem.precio : maxA;
    //             }
    //
    //             for (const elem of b.tipo) {
    //                 maxB = (elem.precio > maxB) ? elem.precio : maxB;
    //             }
    //
    //             return (maxA > maxB) ? -1 : 1;
    //         });
    //
    //         setDatos(copia);
    //     }
    // };

    return (
        <>
            <Navbar/>
            <SearchHeader />
            <div className="search-filters">
                <div className="filters first-line">
                    <SearchBar/>
                    <DropdwOffice/>
                    <DropdwAmenities/>
                    <Link to="/" class="botonSearch"> Buscar </Link>
                </div>
                <div className="filters">
                    <OrderBy/>
                    <Slider/>
                </div>

            </div>

            <div className = "cards-coworks">
                {datos.map((cowork, index) => {

                    return (cowork.tipo.map((oficina, index) => {
                        return (<SearchCard className="cw-card" key={index} nombre={cowork.nombre}
                                            promedioPuntos={cowork.promedioPuntos}
                                            direccion={cowork.direccion.streetAddress}
                                            precio={oficina.precio}
                                            amenities={oficina.diferencial}/>)
                    }))
                })}

                <SearchCard  className="cw-card" nombre={"a"} promedioPuntos={2.5} direccion={"alfjlasf"} precio={"0"} amenities={[]}/>
                <SearchCard  className="cw-card" nombre={"a"} promedioPuntos={2.5} direccion={"alfjlasf"} precio={"0"} amenities={[]}/>
                <SearchCard  className="cw-card" nombre={"a"} promedioPuntos={2.5} direccion={"alfjlasf"} precio={"0"} amenities={[]}/>
                <SearchCard  className="cw-card" nombre={"a"} promedioPuntos={2.5} direccion={"alfjlasf"} precio={"0"} amenities={[]}/>
                <SearchCard  className="cw-card" nombre={"a"} promedioPuntos={2.5} direccion={"alfjlasf"} precio={"0"} amenities={[]}/>
            </div>
            <Footer/>
        </>
    )
}