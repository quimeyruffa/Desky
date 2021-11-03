import './searchCard.css';
import {Link} from "react-router-dom";
import Rating from "@mui/material/Rating"
import {Amenity} from "./Amenities/Amenity";

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
                        <p className="nombre">{props.nombre}</p>
                        <Rating name="read-only" value={props.promedioPuntos} precision={0.1} readOnly />
                        <p>{props.direccion}</p>
                        <div className="amenities">
                            {props.amenities.map((amenity, index) => {
                                return (<Amenity key={index} type={amenity}/>)
                            })}
                        </div>
                    </div>

                </div>
                <div className="ver">
                    <Link to="/" className="btn-ver">VER</Link>
                    <p>{"$" + props.precio}</p>
                </div>
            </div>
        </div>
    )
}
