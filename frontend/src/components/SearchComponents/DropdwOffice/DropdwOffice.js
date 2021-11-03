import './dropdwOffice.css'
import {AiOutlineDown, AiOutlineMinus, AiOutlinePlus, AiOutlineUp, BiUserCircle} from "react-icons/all";
import {useState} from "react";

export const DropdwOffice = () => {

    const [miembros, setMiembros] = useState(0);
    const [oficina, setOficina] = useState("Oficina")
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
                        <option value="Oficina">Oficina</option>
                        <option value="Open Office">Open Office</option>
                        <option value="Private Office">Private Office</option>
                        <option value="Any">Any</option>
                    </select>
                </div>
            </div>
        </div>
    )
}