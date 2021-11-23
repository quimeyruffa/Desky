import './searchCard.css';
import {Link} from "react-router-dom";
import Rating from "@mui/material/Rating"
import {Amenity} from "./Amenities/Amenity";
import { Button } from 'react-bootstrap';

export const SearchCard = (props) => {

    return (
        <div className="main-container">
            <div className={"Scard " + props.className}>
                <div className="info">
                    <img
                        src="https://infonegocios.info/uploads/HIT-Cowork-oficinas-caba-4-cba.jpg"
                        width="220px" height="160px"
                        className="cowork-img"/>
                    <div className="datosCowork">
                        <p className="nombre" style={{marginBottom: "0"}}>{props.nombre}</p>
                        <p className="nombre" style={{fontSize: "15px", fontWeight: "normal"}}>{props.tipo}</p>
                        <Rating name="read-only" value={props.promedioPuntos} precision={0.1} readOnly/>
                        <p>{props.direccion}</p>
                        <div className="amenities">
                            {props.amenities.map((amenity, index) => {
                                return (<Amenity key={index} type={amenity}/>)
                            })}
                        </div>
                    </div>

                </div>
                <div className="ver">
                    <Button onClick={()=>props.handleClick({nombre: props.nombre, direccion: props.direccion, amenities: props.amenities, tipo: props.tipo, precio: props.precio, idCowork: props.idCowork})} className="btn-ver">VER</Button>
                    <p style={{fontSize:"22px"}}>{"$" + props.precio}</p>
                </div>
            </div>
        </div>
    )
}
