import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface InputComponentProps {
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  fullWidth?: boolean;
  isPassword?: boolean;
  placeholder?: string;
  defaultValue?: number;
  endAdorment?: string | React.JSX.Element;
  startAdorment?: string | React.JSX.Element;
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
  startAdorment,
  isPassword
}: InputComponentProps) {
  // variables
  const [visibility, setVisibility] = React.useState(false);

  // functions
  const handleClickShowPassword = () => {
    setVisibility(!visibility);
  }

  // render 
  const EndInputAdorment = () => {
    if (isPassword) {
      return (
        <InputAdornment position="end">
          <IconButton
            onClick={handleClickShowPassword}
          >
            {visibility ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      )
    }

    return (
      <InputAdornment position="end">
        {endAdorment}
      </InputAdornment>
    )
  }

  const defineInputType = (): string => {
    if (!isPassword) return type || "text";

    if (isPassword && visibility) return "text";
    else return "password";
  }

  return (
    <TextField
      id={id}
      label={label}
      name={name}
      fullWidth={fullWidth}
      placeholder={placeholder}
      type={defineInputType()}
      defaultValue={defaultValue}
      InputProps={{
        endAdornment: (<EndInputAdorment />),
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
