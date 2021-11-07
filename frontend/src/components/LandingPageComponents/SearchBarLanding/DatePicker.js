import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import './datepicker.css'
import {Box} from "@mui/material";

export const  DatePicker = (props) => {

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
                value={props.value}
                onChange={props.handleChange}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                    <div className={"picker " + props.className}>
                        {InputProps?.endAdornment}
                        <input disabled ref={inputRef} {...inputProps} className="input-fecha-mui-landing" value={props.value.toLocaleDateString("es-ES",options)}/>
                    </div>

                )}
            />
        </LocalizationProvider>
    );
}