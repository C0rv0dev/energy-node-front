import React from "react";
import { InputAdornment, TextField } from "@mui/material";

interface InputComponentProps {
    id?: string;
    label?: string;
    name?: string;
    fullWidth?: boolean;
    placeholder?: string;
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
    placeholder,
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
            placeholder={placeholder}
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
