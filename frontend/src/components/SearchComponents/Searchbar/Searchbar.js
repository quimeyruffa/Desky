import "./searchbar.css"
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    return (
        <div className='contenedor-principal'>
            <div className="contenedor-blanco lupa">
                <div className='busqueda'>
                    <SearchIcon/>
                    <input className="input" type="search"/>
                </div>
            </div>
            <div className="contenedor-blanco fechas">
                <span className="separator"/>
                <div className='input-fecha'>
                    <input id="input-llegada" className='fecha-entrada' type="date"/>
                </div>
                <span className="separator"/>
                <div className='input-fecha'>
                    <input id="input-salida" className='fecha-salida' type="date"/>
                </div>
            </div>
        </div>
    )
}