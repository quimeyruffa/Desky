import React from 'react';
import './header.css';
import { ReactComponent as Conjunto } from '../../assets/SVG/conjunto.svg';
import { Search } from '../Search/Search';
import Workspace from '../../assets/images/workspace.png';
import MeetingRoom from '../../assets/images/meetingRoom.png';
import Museum from '../../assets/images/museum.png';
export const Header = () => {
    return (
        <div className='header'>
            <div className="split">
                <div className='titulo'>
                    <h1>DESKY</h1>
                    <h5>TU NUEVO ESPACIO DE TRABAJO</h5>
                </div>
                <div className="svg">
                    <Conjunto className='conjunto-svg' />
                </div>

            </div>
            <Search />
            <section class="container" >
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
