import * as React from "react";
import SliderUnstyled from "@mui/core/SliderUnstyled";
import './slider.css'
import {useState} from "react";


export default function Slider() {
    const [values, setValues] = useState([5000, 70000]);

    const handleChange = (event, newValue) => {
        setValues(newValue);
    };

    const valuetext = (value) => {
        return `$${value}`;
    }

    return (
        <div className="slider-container">
            <SliderUnstyled className="slider" defaultValue={10} value={values} onChange={handleChange} step={150}
                            valueLabelDisplay="on" min={0} max={150000} valueLabelFormat={valuetext} />
        </div>
    );
}
