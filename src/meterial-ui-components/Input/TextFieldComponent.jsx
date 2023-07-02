import { TextField } from "@mui/material";
import React from "react";

//variant = standard/ filled/ outlined
export default function TextFieldComponent({
  variant,
  className,
  color,
  id,
  label,
  defaultValue,
  type,
  name,
  placeholder,
  size,
  margin,
  value,
  onChangeHandler,
}) {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      className={className}
      defaultValue={defaultValue}
      type={type}
      name={name}
      placeholder={placeholder}
      size={size}
      margin={margin}
      color={color}
      value={value}
      onChange={(e) => onChangeHandler(e)}
    />
  );
}
