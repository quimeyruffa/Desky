import {SearchCard} from "./SearchCard/SearchCard";
import Slider from "./Slider/Slider";

export const Busqueda = () => {
    return (
        <>
            <SearchCard nombre="WeWork"
                        promedioPuntos="3.4"
                        direccion="direccion 1234, comuna 13"
                        precio="12345"
                        amenities={["petFriendly", "kitchen", "podcast"]}/>
            <SearchCard nombre="Cowork Ficticio"
                        promedioPuntos="3"
                        direccion="direccion 1234, comuna 13"
                        precio="12345"
                        amenities={["parking", "dining"]}/>
            <SearchCard nombre="HIT Cowork"
                        promedioPuntos="4.7"
                        direccion="direccion 1234, comuna 13"
                        precio="12345"
                        amenities={["petFriendly", "podcast", "coffee"]}/>
            <Slider/>
        </>
)
}