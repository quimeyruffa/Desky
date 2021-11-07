import "./searchbar.css"
import SearchIcon from '@mui/icons-material/Search';
export const SearchBar = () => {
    return (
        <div className = 'contenedor-principal'>
            <div className="contenedor-blanco">
                <div className='busqueda'>
                    <SearchIcon/>
                    <input className="input" type="search"/>
                </div>
                <div className='input-fecha'>
                    <input id="input-llegada" className='fecha-entrada' type="date"/>
                </div>
                <div className='input-fecha'>
                    <input id="input-salida" className='fecha-salida' type="date"/>
                </div>
            </div>
        </div>
    )
}