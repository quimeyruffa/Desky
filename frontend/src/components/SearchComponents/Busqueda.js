import {SearchCard} from "./SearchCard/SearchCard";
import Slider from "./Slider/Slider";
import React, {useEffect, useState} from "react";
import {SearchBar} from "./SearchBar/Searchbar";
import './busqueda.css'
import {Link} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {Footer} from "../Footer/Footer";
import {SearchHeader} from "../Headers/SearchHeader";
import {OrderBy} from "./OrderBy/OrderBy"
import { DropdwAmenities } from "./DropdwAmenities/DropdwAmenities";
import {DropdwOffice} from "./DropdwOffice/DropdwOffice";
import { useHistory } from "react-router";

export const Busqueda = () => {
    const history = useHistory()
    const uri = 'http://localhost:3000';

    const [datos, setDatos] = useState([]);
    const [valueLlegada, setValueLlegada] = useState(new Date());
    const [valueName, setValueName] = useState("");
    const [valueSalida, setValueSalida] = useState(new Date());
    const [ordenarPor, setOrdenarPor] = useState("elegir");
    const [rangoPrecios, setRangoPrecios] = useState([5000, 70000]);
    const [amenities, setAmenities] = useState({
        petfriendly: false,
        shop: false,
        parking: false,
        podcast: false,
        kitchen: false
    });
    const [miembros, setMiembros] = useState(0);
    const [oficina, setOficina] = useState("Cualquiera");
    const [nombre, setNombre] = useState("");

    useEffect(() => {
        setNombre(localStorage.getItem("nombre"));
        setValueLlegada(new Date(localStorage.getItem("fechaIni")));
        setValueSalida(new Date(localStorage.getItem("fechaFin")));

        if (nombre !== "") {

        } else {
            fetch(`${uri}/coworks`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setDatos(data);
                    console.log(data);
                }).catch(e => {
                    console.log(e);
            })

        }
    },[])

    console.log(nombre, valueSalida, valueLlegada);


    const handleChangePrecios = (event, newValue) => {
        setRangoPrecios(newValue);
    }

    const handleChangeLlegada = (newValue) => {
        setValueLlegada(newValue);
    };

    const handleChangeSalida = (newValue) => {
        setValueSalida(newValue);
    }

    const handleOrderBy = (event) => {
        setOrdenarPor(event.target.value);
    }
    const handleChangeName = (newValue) => {
        setValueName(newValue);
    }
    const handleAmenities = (event) => {
        const amenity = event.target.id.substring(0, event.target.id.length-1);
        setAmenities({...amenities, [amenity] : !amenities[amenity]});
    }

    const handleChangeDropdownMiembros = (miembros, oficina) => {
        setMiembros(miembros);
        setOficina(oficina);
    }


    const handleClickButton = () =>{
        fetch(`${uri}/coworksInPriceRange`, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => {
            
        })
        
    }


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
                    <SearchBar handleChangeLlegada={(newValue) => handleChangeLlegada(newValue)}
                               valueLlegada={valueLlegada}
                               handleChangeSalida={(newValue) => handleChangeSalida(newValue)}
                               valueSalida={valueSalida}
                               valueName = {valueName}
                               handleName = {(newValue) => handleChangeName(newValue)}/>
                    <DropdwOffice handleChange={handleChangeDropdownMiembros}/>
                    <DropdwAmenities handleAmenities={handleAmenities}/>
                    <button onClick={handleClickButton} className="botonSearch"> Buscar </button>
                </div>
                <div className="filters">
                    <OrderBy handleChange={handleOrderBy}/>
                    <Slider handleChange={handleChangePrecios}/>
                </div>

            </div>

            <div className = "cards-coworks scrollable">
                {datos.map((cowork, index) => {

                    return (cowork.tipo.map((oficina, index) => {
                        return (<SearchCard className="cw-card" key={index} nombre={cowork.nombre}
                                            promedioPuntos={cowork.promedioPuntos}
                                            direccion={cowork.direccion.streetAddress}
                                            precio={oficina.precio}
                                            amenities={oficina.diferencial}/>)
                    }))
                })}
            </div>
            <Footer/>
        </>
    )
}