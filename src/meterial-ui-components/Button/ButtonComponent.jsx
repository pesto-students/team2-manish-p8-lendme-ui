import { Button } from "@mui/material";
import React from "react";

export default function ButtonComponent({className, buttonText, variant, buttonImage, onClickHandler}){
    return(
        <Button className={className} variant={variant} onClick={(e) => onClickHandler(e)}>
            {buttonText}
        </Button>
    )
}