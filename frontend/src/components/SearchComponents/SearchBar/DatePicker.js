import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import './datepicker.css'
import {Box} from "@mui/material";

export const  DatePicker = (props) => {
    const [value, setValue] = React.useState(new Date());

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const options = {
        weekday: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric"
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Custom input"
                inputFormat="dd/MM/yyyy"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                    <div className={"picker " + props.className}>
                        {InputProps?.endAdornment}
                        <input disabled ref={inputRef} {...inputProps} className="input-fecha-mui" value={value.toLocaleDateString("es-ES",options)}/>
                    </div>

                )}
            />
        </LocalizationProvider>
    );
}