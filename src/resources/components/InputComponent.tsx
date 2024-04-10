import React from "react";
import { InputAdornment, TextField } from "@mui/material";

interface InputComponentProps {
    id?: string;
    label?: string;
    name?: string;
    fullWidth?: boolean;
    type?: string;
    defaultValue?: number;
    endAdorment?: string;
    startAdorment?: string;
}

function InputComponent({
    id,
    label,
    name,
    fullWidth,
    type,
    defaultValue,
    endAdorment,
    startAdorment
}: InputComponentProps) {
    return (
        <TextField
            id={id}
            label={label}
            name={name}
            fullWidth={fullWidth}
            type={type}
            defaultValue={defaultValue}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        {endAdorment}
                    </InputAdornment>
                ),
                startAdornment: (
                    <InputAdornment position="start">
                        {startAdorment}
                    </InputAdornment>
                )
            }}
            variant="outlined"
        />
    )
};

export default InputComponent;
