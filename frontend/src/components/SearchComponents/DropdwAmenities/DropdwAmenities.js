import React from 'react'
import './dropdwamenities.css'
import {AiOutlineDown, AiOutlineUp} from "react-icons/all";
export const DropdwAmenities = () => {
    return (
        <div className = 'contenedor-select-amenities'>
            <div className = 'contenedor-gris-select'>
                <div className = 'contenedor-blanco-select'>
                    <p> Amenities...</p>
                    <AiOutlineDown />
                </div>     
            </div>
            <div className='contenedor-opciones-amenities'>
                <select> 
                    <option> PetFriendly </option>
                    <option> PetFriendly </option>
                    <option> PetFriendly </option>
                    <option> PetFriendly </option>
                </select> 
            </div>
        </div>
    )
}
