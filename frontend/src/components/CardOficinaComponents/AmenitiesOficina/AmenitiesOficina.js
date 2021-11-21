import React from 'react';
import './AmenitiesOficina.css';
import PetLogo from '../../../assets/images/PetLogo.png';
import CateringLogo from '../../../assets/images/CateringLogo.png';
import ShopLogo from '../../../assets/images/ShopLogo.png';
import MeetsLogo from '../../../assets/images/MeetsLogo.png';



// export const AmenitiesOficina = (props) => {
//     return (
//         <div className="amenities">
//         {props.amenities.map((amenity, index) => {
//             return (<Amenity key={index} type={amenity}/>)
//         })}
//         </div>
//     )
// }

export const AmenitiesOficina = (prop) => {
    return (
        <div className='AmenitiesOficina-container'>
            <div className="matriz">
                <div className="fila">
                    <div className="borde">
                        <div>
                            <img src={PetLogo} className='circulo' alt="amenitie" />
                            <a>Pet Friendly</a>
                        </div>
                    </div>
                </div>
                <div className="fila">
                    <div className="borde">
                        <div>
                            <img src={CateringLogo} className='circulo' alt="amenitie" />
                            <a>Catering</a>
                        </div>
                    </div>
                </div>
                <div className="fila">
                    <div className="borde">
                        <div>
                            <img src={ShopLogo} className='circulo' alt="amenitie" />
                            <a>Shop</a>
                        </div>
                    </div>
                </div>
                <div className="fila">
                    <div className="borde">
                        <div>
                            <img src={MeetsLogo} className='circulo' alt="amenitie" />
                            <a>Sala de reuniones</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
