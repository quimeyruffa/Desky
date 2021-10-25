import "./searchbar.css"
import SearchIcon from '@mui/icons-material/Search';
export const SearchBar = () => {
    return (
        <div className = 'contenedor-principal'>
            
            <div className = 'busqueda'>
                <SearchIcon/>
                <input class="input" type="search" />
            </div>
            <div className = 'input-fecha'>
                <input className= 'fecha-entrada' type="date" placeholder="Entrada"/>
            </div>
            <div className = 'input-fecha'>
                <input className='fecha-salida' type="date" placeholder="Salida"/>
            </div>
        </div>
    )
}