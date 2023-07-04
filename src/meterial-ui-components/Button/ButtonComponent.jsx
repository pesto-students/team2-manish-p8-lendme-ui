import { Button } from "@mui/material";
import React from "react";

export default function ButtonComponent({className, buttonText, buttonImage, onClickHandler}){
    return(
        <Button className={className} variant="contained" onClick={(e) => onClickHandler(e)}>
            {buttonText}
        </Button>
    )
}