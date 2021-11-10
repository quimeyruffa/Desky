import React from 'react'
import './dropdwamenities.css'
import { useState } from 'react';
import {AiOutlineDown, AiOutlineUp} from "react-icons/all";


export const DropdwAmenities = (props) => {
    const [amenities, setAmenities] = useState({
        petfriendly: false,
        shop: false,
        parking: false,
        podcast: false,
        kitchen: false
    });
    const [click, setClick] = useState(false);
    const handleClickClick = (event) => {
        setClick(!click);
    }
    const handleClick = (event) =>{
        const amenity = event.target.id.substring(0, event.target.id.length-1);
        setAmenities({...amenities, [amenity] : !amenities[amenity]});
        props.handleAmenities(event);
    }
    return (
        <div className = 'dropdown-amenities-container'>
            <div className = 'contenedor-gris-select'>
                <div className = 'contenedor-blanco-select'>
                    <p> Amenities...</p>
                    {click ? <AiOutlineUp className="down-arrow" onClick={handleClickClick}/> :
                    <AiOutlineDown className="down-arrow" onClick={handleClickClick}/>}
                </div>     
            </div>
            <div className= {click ? 'contenedor-opciones-amenities' : "hide"} >
                <div className = 'linea-opciones' id="petfriendly1" onClick={handleClick}>
                    <div id="petfriendly2" onClick={handleClick} className = { 'cuadrado-check ' + (amenities["petfriendly"] ? 'seleccionado' : '')}></div>
                    <div className = 'amenity'> <p id="petfriendly3" onClick={handleClick}> PetFriendly </p> </div>
                </div>
                <div className = 'linea-opciones' id="shop1" onClick={handleClick}>
                    <div id="shop2" onClick={handleClick} className = { 'cuadrado-check ' + (amenities["shop"] ? 'seleccionado' : '')}></div>
                    <div className = 'amenity'> <p id="shop3" onClick={handleClick}> Shop </p> </div>
                </div>
                <div className = 'linea-opciones' id="parking1" onClick={handleClick}>
                    <div id="parking2" onClick={handleClick} className = { 'cuadrado-check ' + (amenities["parking"] ? 'seleccionado' : '')}></div>
                    <div className = 'amenity'> <p id="parking3" onClick={handleClick}> Parking </p> </div>
                </div>
                <div className = 'linea-opciones' id="podcast1" onClick={handleClick}>
                    <div id="podcast2" onClick={handleClick} className = { 'cuadrado-check ' + (amenities["podcast"] ? 'seleccionado' : '')}></div>
                    <div className = 'amenity'> <p id="podcast3" onClick={handleClick}> Podcast </p> </div>
                </div>
                <div className = 'linea-opciones' id="kitchen1" onClick={handleClick}>
                    <div id="kitchen2" onClick={handleClick} className = { 'cuadrado-check ' + (amenities["kitchen"] ? 'seleccionado' : '')}> </div>
                    <div className = 'amenity'> <p id="kitchen3" onClick={handleClick}> Kitchen </p> </div>
                </div>
            </div>
        </div>
    )
}
