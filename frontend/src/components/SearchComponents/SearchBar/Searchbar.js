import "./searchbar.css"
import SearchIcon from '@mui/icons-material/Search';
import {DatePicker} from "./DatePicker";

export const SearchBar = (props) => {
    return (
        <div className='contenedor-principal'>
            <div className="contenedor-blanco lupa">
                <div className='busqueda'>
                    <SearchIcon/>
                    <input handleChange={props.handleName} value={props.valueName} className="input" type="search"/>
                </div>
            </div>
            <div className="contenedor-blanco fechas">
                <span className="separator"/>
                <div className='input-fecha'>
                    <p className="label-input-searchbar">Llegada</p>
                    <DatePicker className="fecha-entrada" handleChange={props.handleChangeLlegada} value={props.valueLlegada}/>
                </div>
                <span className="separator"/>
                <div className='input-fecha'>
                    <p className="label-input-searchbar">Salida</p>
                    <DatePicker className="fecha-salida" handleChange={props.handleChangeSalida} value={props.valueSalida}/>
                </div>
            </div>
        </div>
    )
}