import "./searchbar.css"
import SearchIcon from '@mui/icons-material/Search';
import {DatePicker} from "./DatePicker";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
export const SearchBar = (props) => {
    const history = useHistory();
    const handleClick = () =>{
        localStorage.setItem("fechaFin", props.valueSalida);
        localStorage.setItem("fechaIni", props.valueLlegada);
        history.push("/search");
    }
    return (
        <div className='contenedor-principal-landing'>
            <div className="contenedor-blanco-landing lupa-landing">
                <div className='busqueda-landing'>
                    <SearchIcon/>
                    <input onChange={props.handleName}  className="input-landing" type="search"/>
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

            <button onClick={handleClick}> BUSCAR TODOS </button>
            {/* <Link to={{pathname:"/search", state: {name: props.valueName, llegada: props.valueLlegada, salida: props.valueSalida}}}> BUSCAR TODOS </Link> 
            <Link to={{pathname:"/search", state: {name: props.valueName, llegada: props.valueLlegada, salida: props.valueSalida}}}> BUSCAR POR FILTROS </Link>  */}
        </div>
    )
}