import "./searchbar.css"
import SearchIcon from '@mui/icons-material/Search';
import {DatePicker} from "./DatePicker";

export const SearchBar = (props) => {
    return (
        <div className='contenedor-principal-landing'>
            <div className="contenedor-blanco-landing lupa-landing">
                <div className='busqueda-landing'>
                    <SearchIcon/>
                    <input className="input-landing" type="search"/>
                </div>
            </div>
            <div className="contenedor-blanco-landing fechas-landing">
                <span className="separator-landing"/>
                <div className='input-fecha-landing'>
                    <p className="label-input-searchbar-landing">Llegada</p>
                    <DatePicker className="fecha-entrada-landing" handleChange={props.handleChangeLlegada} value={props.valueLlegada}/>
                </div>
                <span className="separator-landing"/>
                <div className='input-fecha-landing'>
                    <p className="label-input-searchbar-landing">Salida</p>
                    <DatePicker className="fecha-salida-landing" handleChange={props.handleChangeSalida} value={props.valueSalida}/>
                </div>
            </div>
        </div>
    )
}