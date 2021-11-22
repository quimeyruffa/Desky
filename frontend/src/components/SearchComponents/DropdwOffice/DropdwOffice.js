import './dropdwOffice.css'
import {AiOutlineDown, AiOutlineMinus, AiOutlinePlus, AiOutlineUp, BiUserCircle} from "react-icons/all";
import {useState} from "react";

export const DropdwOffice = (props) => {

    const [miembros, setMiembros] = useState(0);
    const [oficina, setOficina] = useState("Cualquiera")
    const [click, setClick] = useState(false);

    const handleClickInput = (event) => {
        if (event.target.innerText === "+") {
            setMiembros(miembros + 1)
        } else {
            if (miembros !== 0) {
                setMiembros(miembros - 1);
            }
        }
    }

    const handleSelect = (event) => {
        setOficina(event.target.value);
    }

    const handleClickClick = (event) => {
        setClick(!click);
        props.handleChange && props.handleChange(miembros, oficina);
    }

    return (
        <div className="dropdown-office-container">
            <div className="dropdown-office-header">
                <div className="dropdown-office-header-data">
                    <BiUserCircle className="user-circle"/>
                    <div className="dropdown-office-header-text">
                        <p id="oficina">{oficina}</p>
                        <p id="miembros">{miembros + " " + (miembros !== 1 ? "Miembros" : "Miembro")}</p>
                    </div>
                    {click ? <AiOutlineUp className="down-arrow" onClick={handleClickClick}/> :
                    <AiOutlineDown className="down-arrow" onClick={handleClickClick}/>}
                </div>
            </div>
            <div className={"dropdown-office-body " + (click ? "" : "hide")}>
                <div className="dropdown-office-body-members">
                    <p>Miembros</p>
                    <div className="dw-office-member-input">
                        <button className="boton-input minus" onClick={handleClickInput}>-</button>
                        <input type="text" id="input-miembros" value={miembros} disabled/>
                        <button className="boton-input plus" onClick={handleClickInput}>+</button>
                    </div>
                </div>
                <div className="dropdown-office-body-offices">
                    <select className="offices" onChange={handleSelect}>
                        <option value="Cualquiera">Cualquiera</option>
                        <option value="Espacio Abierto">Espacio Abierto</option>
                        <option value="Oficina Privada">Oficina Privada</option>
                        <option value="Sala de Reuniones">Sala de reuniones</option>
                        <option value="Eventos">Eventos</option>
                    </select>
                </div>
            </div>
        </div>
    )
}