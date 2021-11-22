import {DatePicker} from "../../SearchComponents/SearchBar/DatePicker";
import '../../SearchComponents/SearchBar/searchbar.css'
import {useState} from "react";
import './fechasDetalle.css'

export const FechasDetalle = (props) => {

    return (
        <div className='contenedor-principal-fecha-detalle'>
            <div className="contenedor-blanco-detalles fechas">
                <div className='input-fecha'>
                    <p className="label-input-searchbar">Llegada</p>
                    <DatePicker className="fecha-entrada" handleChange={props.handleChangeLlegada}
                                value={props.valueLlegada}/>
                </div>
                <span style={{marginLeft: "2px"}} className="separator"/>
                <div className='input-fecha'>
                    <p className="label-input-searchbar">Salida</p>
                    <DatePicker className="fecha-salida" handleChange={props.handleChangeSalida}
                                value={props.valueSalida}/>
                </div>
            </div>
        </div>
    )
}