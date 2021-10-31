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
                        src="https://s3-alpha-sig.figma.com/img/3095/7916/41fe5b911f795d9ec720eebef19e848a?Expires=1635724800&Signature=QG1g~Sf5vp33Cb5z87xsfoerQufgWWPHBDiPEgGObG3O-~WDUuVR0rKjezchEE~Tut4CGMzyx7yXznfIVk6IBn1q1YBvNf8xzogtVOePicmxGVwg1Fkf~U1btG7y0NvSBwtFiORmcRe4ysLyiQXjiY2t7bGVvsoEjXhilHFL9Bh0iPBTmv4GrEaPCFIehVakMGIeBcreHFOrX9zS5YNUxuv3WFn0RfKLpr0xa6oK~1DEDrOTq62zr~cOfBJAJkKYhGeSkrYvB-1Vk4-q0rZc73yiLWENkcXCqKJgcCRQmesAAs3FBk-89xG2a9kVEpSOFTF2CO1KECiaylHAaxvQNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
