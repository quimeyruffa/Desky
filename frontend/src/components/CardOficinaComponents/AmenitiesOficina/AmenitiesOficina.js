import React from 'react';
import './AmenitiesOficina.css';
import {Amenity} from "../../SearchComponents/SearchCard/Amenities/Amenity";

export const AmenitiesOficina = (props) => {

    return (
        <div className='AmenitiesOficina-container'>
            <div className="matriz-detalle">
                <div className="fila">
                        <div className="amenities-detalle-gris">
                            {props.amenitites.map((amenity, index) => {
                                return (
                                    <div className="borde-detalle">
                                        <div>
                                            <Amenity type={amenity} key={index}/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                </div>
            </div>
        </div>
    )
}
