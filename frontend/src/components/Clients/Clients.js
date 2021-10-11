import React from 'react';
import './clients.css';
import JoinLogo from '../../assets/images/JoinLogo.png';
import UrbanLogo from '../../assets/images/UrbanLogo.png'
import GOLogo from '../../assets/images/GOLogo.png';
import HitLogo from '../../assets/images/HitLogo.png';
import CentralLogo from '../../assets/images/CentralLogo.png';
import HubLogo from '../../assets/images/HubLogo.png';
import BeleLogo from '../../assets/images/BeleLogo.png';
import MLogo from '../../assets/images/MLogo.png';
import WeWorkLogo from '../../assets/images/WeWorkLogo.png'
export const Clients = () => {
    return (
        <div className='clients-container'>
            <div className="header-clients">
                <p>Clientes</p>
                <span>Trabajando con los mejores de la industria.</span>
            </div>
            <div className="line-clients"></div>
            <div className="matriz">
                <div className="fila">
                    <div className="borde">
                        <img src={JoinLogo} className='circulo' alt="client" />
                    </div>
                </div>
                <div className="fila">
                    <div className="borde">
                        <img src={BeleLogo} alt="client" />
                    </div>
                    <div className="borde">
                        <img src={CentralLogo} alt="client" />
                    </div>
                </div>
                <div className="fila">
                    <div className="borde">
                        <img src={HubLogo} alt="client" />
                    </div>
                    <div className="borde">
                        <img src={HitLogo} alt="client" />
                    </div>
                    <div className="borde">
                        <img src={GOLogo} alt="client" />
                    </div>
                </div>
                <div className="fila">
                    <div className="borde">
                        <img src={WeWorkLogo} className='circulo' style={{ width: '130px' }} alt="client" />
                    </div>
                    <div className="borde">
                        <img src={MLogo} className='circulo' alt="client" />
                    </div>
                </div>
                <div className="fila">
                    <div className="borde">
                        <img className='circulo' src={UrbanLogo} alt="client" />
                    </div>
                </div>
            </div>
        </div>
    )
}
