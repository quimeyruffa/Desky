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
import {DropdwAmenities} from "./DropdwAmenities/DropdwAmenities";
import {DropdwOffice} from "./DropdwOffice/DropdwOffice";
import {useHistory} from "react-router";
import { Amenity } from "./SearchCard/Amenities/Amenity";

export const Busqueda = () => {
    const history = useHistory()
    const uri = 'http://localhost:3000';
    const [oficinas, setOficinas] = useState([]);
    const [oficinasFallback, setOficinasFallback] = useState([]);
    const [valueLlegada, setValueLlegada] = useState(new Date());
    const [valueName, setValueName] = useState("");
    const [valueSalida, setValueSalida] = useState(new Date());
    const [ordenarPor, setOrdenarPor] = useState("elegir");
    const [rangoPrecios, setRangoPrecios] = useState([5000, 70000]);
    const [amenities, setAmenities] = useState({
        petFriendly: false,
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
            fetch(`${uri}/oficinas`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setOficinas(data);
                    setOficinasFallback(data);
                }).catch(e => {
                console.log(e);
            })
        }
    }, [])

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
        const amenity = event.target.id.substring(0, event.target.id.length - 1);
        setAmenities({...amenities, [amenity]: !amenities[amenity]});
    }

    const handleChangeDropdownMiembros = (miembros, oficina) => {
        setMiembros(miembros);
        setOficina(oficina);
    }

    
    const handleClickButton = async () => {

        let datos = await filtroRangoPrecios();

        datos = filtroNombre(datos);

        let seleccionadas = Object.keys(amenities).filter((amenity) => amenities[amenity]);

        if(seleccionadas.length > 0) {
        
            datos = filtroAmenities(datos, seleccionadas);
        }

        datos = filtroOficinasYMiembros(datos);

        if (ordenarPor === "recomendados") {
            datos = filtroRecomendados(datos);

        } else if (ordenarPor === "precio") {
            datos = filtroPrecios(datos);
        }


        setOficinas(datos);

    }

    const filtroRangoPrecios = async () => {
        const response = await fetch(`${uri}/oficinasInPriceRange?min=${rangoPrecios[0]}&max=${rangoPrecios[1]}`, {
            method: 'GET',
        })
        return await response.json();
    }

    const filtroNombre = (data) => {
        const search = valueName.target.value;
        return data.filter((elem) => elem.nombreCowork.toLowerCase().replaceAll(" ", "").includes(search.toLowerCase().replaceAll(" ", "")));
    }

    const filtroAmenities = (datos, seleccionadas) => {
        
        let postFiltroAmenities = [];
        datos.forEach((oficina) => {
            seleccionadas.forEach((amenity) => {
                if(oficina.amenities.indexOf(amenity) >= 0){
                    postFiltroAmenities.push(oficina);
                }
            })  
        }) 

        return postFiltroAmenities;
    
    }

    const filtroOficinasYMiembros = (data) => {

        let filteredData = data.slice();

        if (miembros > 0 && oficina === "Cualquiera") {
            filteredData = data.filter((elem) => {
                return elem.cantPersonas >= miembros;
            });
        } else if (miembros === 0 && oficina !== "Cualquiera") {
            filteredData = data.filter((elem) => {
                return elem.tipo === oficina.toLowerCase();
            });
        } else if (miembros > 0 && oficina !== "Cualquiera") {
            filteredData = data.filter((elem) => {
                return elem.tipo === oficina.toLowerCase() && elem.cantPersonas >= miembros;
            });
        }

        return filteredData;
    }

    const filtroRecomendados = (data) => {

        let aux = data.slice();

        aux.sort((a, b) => {
            return b.promedioPuntos - a.promedioPuntos
        });

        return aux;
    }

    const filtroPrecios = (data) => {

        let aux = data.slice();

        aux.sort((a, b) => {
            return b.precio - a.precio;
        })

        return aux;
    }

    return (
        <>
            <Navbar/>
            <SearchHeader/>
            <div className="search-filters">
                <div className="filters first-line">
                    <SearchBar handleChangeLlegada={(newValue) => handleChangeLlegada(newValue)}
                               valueLlegada={valueLlegada}
                               handleChangeSalida={(newValue) => handleChangeSalida(newValue)}
                               valueSalida={valueSalida}
                               handleName={(newValue) => handleChangeName(newValue)}/>
                    <DropdwOffice handleChange={handleChangeDropdownMiembros}/>
                    <DropdwAmenities handleAmenities={handleAmenities}/>
                    <button onClick={handleClickButton} className="botonSearch"> Buscar</button>
                </div>
                <div className="filters">
                    <OrderBy handleChange={handleOrderBy}/>
                    <Slider handleChange={handleChangePrecios}/>
                </div>

            </div>

            <div className="cards-coworks scrollable">
                {oficinas.length !== 0 ? oficinas.map((oficina, index) => {
                    return (
                        <SearchCard className="cw-card" key={index} nombre={oficina.nombreCowork} tipo={oficina.tipo}
                                    promedioPuntos={oficina.promedioPuntos}
                                    direccion={oficina.direccion[0].streetAddress + ", " + oficina.direccion[0].city}
                                    precio={oficina.precio}
                                    amenities={oficina.amenities}/>)

                }) : <h2 style={{marginBottom: "100px"}}>No se encontraron resultados...</h2>}
            </div>
            <Footer/>
        </>
    )
}