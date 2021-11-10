import * as React from "react";
import SliderUnstyled from "@mui/core/SliderUnstyled";
import './slider.css'
import {useState} from "react";


export default function Slider(props) {

    const [rangoPrecios, setRangoPrecios] = useState([5000, 70000]);

    const handleChangePrecios = (event, newValue) => {
        setRangoPrecios(newValue);
        props.handleChange(event, newValue);
    };

    const valuetext = (value) => {
        return `$${value}`;
    }

    return (
        <div className="slider-container">
            <SliderUnstyled className="slider" defaultValue={10} value={rangoPrecios}
                            onChange={handleChangePrecios} step={150}
                            valueLabelDisplay="on" min={0} max={150000} valueLabelFormat={valuetext} />
        </div>
    );
}
