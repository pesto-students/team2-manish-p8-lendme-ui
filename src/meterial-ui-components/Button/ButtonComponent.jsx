import { Button } from "@mui/material";
import React from "react";

export default function ButtonComponent({
  className,
  buttonText,
  buttonImage,
  onClickHandler = () => {},
  type = "",
  disabled = false,
  style = null,
}) {
  return (
    <Button
      className={`${className} button-component`}
      variant="contained"
      onClick={(e) => onClickHandler(e)}
      type={type}
      disabled={disabled}
      style={style}
    >
      {buttonText}
    </Button>
  );
}
