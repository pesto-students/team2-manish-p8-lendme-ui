import { Button } from "@mui/material";
import React from "react";

export default function ButtonComponent({
  className,
  buttonText,
  buttonImage,
  onClickHandler = () => {},
  type = "",
  disabled = false,
}) {
  return (
    <Button
      className={className}
      variant="contained"
      onClick={(e) => onClickHandler(e)}
      type={type}
      disabled={disabled}
    >
      {buttonText}
    </Button>
  );
}
