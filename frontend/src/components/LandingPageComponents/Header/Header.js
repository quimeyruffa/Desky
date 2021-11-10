import React from 'react';
import './header.css';
import { ReactComponent as Conjunto } from '../../../assets/SVG/conjunto.svg';
import { SearchBar } from '../SearchBarLanding/Searchbar';
import Workspace from '../../../assets/images/workspace.png';
import MeetingRoom from '../../../assets/images/meetingRoom.png';
import Museum from '../../../assets/images/museum.png';
import { useState } from 'react';


export const Header = () => {

    const [valueLlegada, setValueLlegada] = React.useState(new Date());
    const [valueSalida, setValueSalida] = useState(new Date());
    const [valueName, setValueName] = useState("");
    const handleChangeLlegada = (newValue) => {
        setValueLlegada(newValue);
    };

    const handleChangeSalida = (newValue) => {
        setValueSalida(newValue);
    }
    
    const handleChangeName = (newValue) => {
        setValueName(newValue);
        localStorage.setItem("nombre", newValue.target.value);
    }
    
    return (
        <div className='header'>
            <div className="header-container">
                <div className="split">
                    <div className='titulo'>
                        <h1>DESKY</h1>
                        <h5>TU NUEVO ESPACIO DE TRABAJO</h5>
                    </div>
                    <div className="svg">
                        <Conjunto className='conjunto-svg' style={{zIndex:10}}/>
                    </div>

                </div>
            </div>
            <SearchBar handleChangeLlegada={(newValue) => handleChangeLlegada(newValue)}
                            valueLlegada={valueLlegada}
                               handleChangeSalida={(newValue) => handleChangeSalida(newValue)}
                               valueSalida={valueSalida}
                               valueName = {valueName}
                               handleName = {(newValue) => handleChangeName(newValue)} />
            <section className='links-container' >
                <div className="split">
                    <div className="product-link">
                        <div className="product-circle">
                            <img src={Workspace} alt="work" />
                        </div>
                        <p>Oficinas</p>
                    </div>
                    <div className="product-link">
                        <div className="product-circle">
                            <img src={MeetingRoom} alt="work" />
                        </div>
                        <p style={{ textAlign: 'center' }}>Sala de Reuniones</p>
                    </div>
                    <div className="product-link">
                        <div className="product-circle">
                        <img src={Museum} alt="work" />
                        </div>
                        <p>Eventos</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
